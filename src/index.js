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
      <Login/> {/* Esta parte servirá para cambiar de componetenes Login, Lista, Add */}
    </ThemeProvider>
  </React.StrictMode>
);
reportWebVitals();
