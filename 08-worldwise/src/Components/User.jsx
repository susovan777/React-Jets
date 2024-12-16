import { useNavigate } from 'react-router-dom';
import styles from './User.module.css';
import { useAuth } from '../Contexts/FakeAuthContext';

const User = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt="User logo" />
      <span>Welcome, {user.name}</span>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default User;
