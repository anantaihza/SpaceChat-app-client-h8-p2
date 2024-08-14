import { createBrowserRouter, redirect } from 'react-router-dom';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import MainLayout from '../pages/MainLayout';
import HomePage from '../pages/HomePage';
import MygroupPage from '../pages/MygroupPage';
import UpdateProfilePage from '../pages/UpdateProfilePage';
import ChatGroupPage from '../pages/ChatGroupPage';

const router = createBrowserRouter([
  {
    path: '/register',
    element: <RegisterPage />,
    loader: () => {
      if (localStorage.access_token) {
        return redirect('/');
      }

      return null;
    },
  },
  {
    path: '/login',
    element: <LoginPage />,
    loader: () => {
      if (localStorage.access_token) {
        return redirect('/');
      }

      return null;
    },
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <HomePage />,
        loader: () => {
          if (!localStorage.access_token) {
            return redirect('/login');
          }

          return null;
        },
      },
      {
        path: '/my-groups',
        element: <MygroupPage />,
        loader: () => {
          if (!localStorage.access_token) {
            return redirect('/login');
          }

          return null;
        },
      },
      {
        path: '/my-groups/:id',
        element: <ChatGroupPage />,
        loader: () => {
          if (!localStorage.access_token) {
            return redirect('/login');
          }

          return null;
        },
      },
      {
        path: '/profile',
        element: <UpdateProfilePage />,
        loader: () => {
          if (!localStorage.access_token) {
            return redirect('/login');
          }

          return null;
        },
      },
    ],
  },
]);

export default router;
