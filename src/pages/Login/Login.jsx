import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./login.module.css";

function Login() {
  return (
    <div>
      <h1 className={styles.logo}>LOGO</h1>
      <h2 className={styles.desc}>Welcome To CRM System Sign In To Your Account</h2>
      <LoginForm />
    </div>
  );
}

export default Login;
