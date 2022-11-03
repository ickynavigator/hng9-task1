import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './pages/contact';
import ErrorPage from './pages/Error';
import Index from './pages/index';

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

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
