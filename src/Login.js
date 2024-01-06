import './styles/Login.css';
import Logo from './components/Login_Admin/Logo';
import { Register } from './components/Login_Admin/Register';

function Login() {
  return (
    <div className="App">
      <Logo/>
      <Register/>
    </div>
  );
}

export default Login;
