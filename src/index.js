// Se realizan importaciones pertinentes de React y de Material UI
// así como de los componentes de las interfaces desarrolladas

import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import Lista from './Lista';
import Add from './Add';
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Se crea un theme de MUI en donde se define una paleta de colores
// que se usarán en distintos componentes de la app
const theme = createTheme({
  palette:{             // paleta
    primary:{           // color primario 
      main: "#6d2829",  // color vino
    },
    secondary:{         // color secundario
      main: "#002c6f"   // color navy blue
    },
  }
})

// Se crea la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        {/* La ruta  / nos muestra el formulario para loguearnos */}
        <Route path='/'         element={<Login/>}    />
        {/* La ruta  /:id muestra el proceso de recuperacion de usuario */}
        {/* <Route path='/:id'       element={<User/>}     /> */}
        {/* La ruta /tareas/:id nos muestra un interfaz de ingreso con las opciones */}
        {/* <Route path='/tareas/:id' element={<Welcome/>} /> */}
        {/* La ruta  /:id/tareas/add muestra el formualrio para crear un brigadista*/}
         {/* <Route  path='/:id/tareas/add' element = {<Add/>} /> */}
        <Route path='/add'      element={<Add/>}      />
        {/*  La ruta  /list muestra la lista de brigadistas en una comunidad*/}
        {/* <Route path='/:id/tareas/list'     element={<Lista/>}    />  */}
        <Route path='/list'     element={<Lista/>}    />  
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
reportWebVitals();
