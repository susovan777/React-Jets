import Navbar from '../Components/Navbar';
import styles from './Login.module.css';
import ButtonUI from '../Components/ButtonUI';

const Login = () => {
  return (
    <div className={styles.login}>
      <Navbar />
      <form className={styles.login_form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input id="email" type="email" />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
        
        <ButtonUI type="back">Login</ButtonUI>
      </form>
    </div>
  );
};

export default Login;
