import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  Root,
  ErrorPage,
  Home,
  Temple,
  Reception,
  Schedule,
  Photos,
  Registry,
  RSVP,
  FAQ
} from './routes/index';
import 'process/browser';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/temple',
        element: <Temple />
      },
      {
        path: '/reception',
        element: <Reception />
      },
      {
        path: '/schedule',
        element: <Schedule />
      },
      {
        path: '/photos',
        element: <Photos />
      },
      {
        path: '/registry',
        element: <Registry />
      },
      {
        path: '/RSVP',
        element: <RSVP />
      },
      {
        path: '/FAQ',
        element: <FAQ />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
