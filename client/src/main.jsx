import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routers/router.jsx';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux';
import store from './redux/app/store.js';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    <ToastContainer />
    <RouterProvider router={router} />
  </Provider>
  // </StrictMode>
);
