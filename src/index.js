import React from 'react'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom"
import App from './App.js'
import store from "../src/redux/store.js"
import i18next from "i18next"
import { initReactI18next } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import es from "./i18n/es/es.json"
import en from "./i18n/en/en.json"
import por from "./i18n/por/por.json"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faWhatsapp);

i18next.use(initReactI18next).init({
      lng: "es",
      interpolation: {
            escapeValue: false,
      },
      resourses: {
            es: {
                  translation: es
            },
            en: {
                  translation: en
            },
            por: {
                  translation: por
            },
      }
})


const root = createRoot(document.getElementById('root'))
root.render(
        <StrictMode>
  <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
  </Provider>
        </StrictMode>
)


