import { createBrowserRouter } from 'react-router-dom';
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
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: '/my-groups',
        element: <MygroupPage />,
      },
      {
        path: '/my-groups/:id',
        element: <ChatGroupPage />,
      },
      {
        path: '/profile',
        element: <UpdateProfilePage />,
      },
    ],
  },
]);

export default router;
