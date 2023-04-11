import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import './index.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/job.json')
      },
      {
        path: '/job/:id',
        element: <JobDetails />,
        loader: ({ params }) => fetch('/job.json')
      },
      {
        path: 'statistics',
        element: <Statistics />
      },
      {
        path: 'applied-jobs',
        element: <AppliedJobs />
      },
      {
        path: 'blog',
        element: <Blog />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
