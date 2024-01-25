// Componente que alberga componentes Banner y FormaAdd

import { Link } from 'react-router-dom';
import { Banner } from './components/Comunes/Banner';
import { FormAdd } from './components/AddBrig/FormAdd';

function Login() {
  return (
    <>
      <div className="App">
        <Banner ruta={"/list"} />
        <FormAdd />
      </div>
    </>
  );
}

export default Login;
