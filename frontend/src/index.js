import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

import themeLight from "./styles/themeLight";
import themeDark from "./styles/themeDark";
import Header from "./app/components/shared/header";
import Footer from "./app/components/shared/footer";
import reportWebVitals from './reportWebVitals';
import RoutesProvider from './app/routes';

const App = () => {
  const [theme, setThemeLight] = React.useState(true);
  return (
      <ThemeProvider theme={theme ? themeLight : themeDark}>{/*Update style for background*/}
          <CssBaseline/>
          <React.StrictMode>
            <BrowserRouter>
                <ThemeProvider theme={theme ? themeLight : themeDark}>{/*Update style for components*/}
                    <Route path="/" component={Header}/>
                    <RoutesProvider setThemeLight={setThemeLight}/>
                    <Route path="/" component={Footer}/>
                </ThemeProvider>
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
