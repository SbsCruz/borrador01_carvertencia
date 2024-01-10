// Componente que alberga componentes Banner y ListBrig

import { Banner } from './components/Comunes/Banner';
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
