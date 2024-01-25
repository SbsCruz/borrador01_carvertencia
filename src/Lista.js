// Componente que alberga componentes Banner y ListBrig

import { Link } from 'react-router-dom';
import { Banner } from './components/Comunes/Banner';
import { ListaBrig } from './components/ListaBrig/ListaBrig';

function Login() {
  return (
    <>
      <div className="App">
        <Link to={"/"}>
          <Banner/>
        </Link>
        <ListaBrig />
      </div>
    </>
  );
}

export default Login;
