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

const theme = createTheme({
  palette:{
    primary:{
      main: "#6d2829",
    },
    secondary:{
      main: "#002c6f"
    },
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Login />

    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
