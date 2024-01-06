import './styles/Add.css';
import { Banner } from './components/ListaBrig/Banner';
import { FormAdd } from './components/AddBrig/FormAdd';

function Login() {
  return (
    <>
      <div className="App">
        <Banner/>
        <FormAdd/>
      </div>
    </>
  );
}

export default Login;
