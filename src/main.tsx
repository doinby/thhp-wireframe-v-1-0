import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout.tsx';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		children: [{ index: true, element: <Home /> }],
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={routes} />
	</React.StrictMode>
);
