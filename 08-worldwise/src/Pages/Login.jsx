import Navbar from '../Components/Navbar';
import styles from './Login.module.css';
import ButtonUI from '../Components/ButtonUI';
import { useAuth } from '../Contexts/FakeAuthContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('jack@example.com');
  const [password, setPassword] = useState('qwerty');

  useEffect(() => {
    if (isAuthenticated) navigate('/app', { replace: true });
  }, [isAuthenticated, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) login(email, password);
  };

  return (
    <div className={styles.login}>
      <Navbar />
      <form className={styles.login_form} onSubmit={handleLogin}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <ButtonUI type="primary">Login</ButtonUI>
        </div>
      </form>
    </div>
  );
};

export default Login;
