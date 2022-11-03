import Contact from '@Pages/contact';
import ErrorPage from '@Pages/Error';
import Index from '@Pages/index';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
