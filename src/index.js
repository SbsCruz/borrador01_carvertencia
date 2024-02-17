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
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ListaComu } from './components/Comunidades/ListaComu';
import { NewComu } from './components/Comunidades/NewComu';
import { EditComu } from './components/Comunidades/EditComu';
import { Welcome } from './components/Comunes/Welcome';
import { ListaBrig } from './components/Brigadistas/ListaBrig';
import { NewBrig } from './components/Brigadistas/NewBrig';
// Agregados
import { ListaCar } from './components/Vehiculos/ListaCar';
import { AddCar } from './components/Vehiculos/AddCar';
import { QRCar } from './components/Vehiculos/QRCar';

// Se crea un theme de MUI en donde se define una paleta de colores
// que se usarán en distintos componentes de la app
const theme = createTheme({
  palette: {             // paleta
    primary: {           // color primario 
      main: "#6d2829",  // color vino
    },
    secondary: {         // color secundario
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
          <Route path='/' element={<Login />} />

          {/* Ruta de inicio para administradores */}
          <Route path='/welcome' element={<Welcome />} />

          {/* Rutas para comunidades */}
          <Route path='/comunidades' element={<ListaComu />} />
          <Route path='/comunidades/new' element={<NewComu />} />
          <Route path='/comunidades/edit' element={<EditComu />} />

          {/* Rutas para Brigadistas */}
          <Route path='/brigadistas' element={<ListaBrig />} />
          <Route path='/brigadistas/new' element={<NewBrig />} />


          {/* La ruta  /:id muestra el proceso de recuperacion de usuario */}
          {/* <Route path='/:id'       element={<User/>}     /> */}

          {/* La ruta /tareas/:id nos muestra un interfaz de ingreso con las opciones */}
          {/* <Route path='/tareas/:id' element={<Welcome/>} /> */}

          {/* La ruta  /:id/tareas/add muestra el formualrio para crear un brigadista*/}
          {/* <Route  path='/:id/tareas/add' element = {<Add/>} /> */}


          {/*  La ruta  /list muestra la lista de brigadistas en una comunidad*/}
          {/* <Route path='/:id/tareas/list'     element={<Lista/>}    />  */}
          {/* Rutas para vehiculos */}
          <Route path="/autos" element={<ListaCar />} />
          <Route path="/autos/new" element={<AddCar/>} />  
          <Route path="/autos/qr" element={<QRCar  />} />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
reportWebVitals();
