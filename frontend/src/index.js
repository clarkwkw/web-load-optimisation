import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

import './styles/app.css';
import themeDark from "./styles/themeDark";

import Header from "./app/components/shared/header";
import Footer from "./app/components/shared/footer";
import reportWebVitals from './reportWebVitals';
import RoutesProvider from './app/routes';

const App = () => {
  console.log("Env: ", process.env.NODE_ENV);
  return (
      <ThemeProvider theme={themeDark}>
          <CssBaseline/>
          <React.StrictMode>
            <BrowserRouter>
                <Route path="/" component={Header}/>
                <RoutesProvider />
                <Route path="/" component={Footer}/>
            </BrowserRouter>
          </React.StrictMode>
      </ThemeProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
