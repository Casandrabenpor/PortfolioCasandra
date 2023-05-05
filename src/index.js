import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { HomePage } from './pages/homePage';
import { AboutPage } from './pages/aboutPage';
import { ProyectsPage } from './pages/proyectsPage';
import { ContactPage } from './pages/contactPage';
import { HashRouter , Routes, Route } from "react-router-dom";
// import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutPage" element={<AboutPage />} /> 
        <Route path="/proyectsPage" element={<ProyectsPage />}/>
        <Route path="/contactPage" element={<ContactPage />}/>
      </Routes>
    </HashRouter>
    {/* </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
