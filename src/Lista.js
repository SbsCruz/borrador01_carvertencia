import './styles/List.css';
import { Banner } from './components/ListaBrig/Banner';
import { ListaBrig } from './components/ListaBrig/ListaBrig';

function Login() {
  return (
    <>
      <div className="App">
      <Banner/>
      <ListaBrig/>
      </div>
    </>
  );
}

export default Login;
