import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import AppProvider from './AppProvider.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Show from './pages/Show.jsx'

import { QueryClient, QueryClientProvider} from "@tanstack/react-query"

const queryClient = new QueryClient()

const router = createBrowserRouter([
          {
            path: "/",
            element: <App/>,
            children: [
              {
                path:"/",
                element: <Home />
              },
              {
                path:"/Login",
                element: <Login />
              },
              {
                path:"/Register",
                element: <Register />
              },
              {
                path:"/Show/:id",
                element: <Show />
              },
            ]
          },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <QueryClientProvider client={queryClient}>
    <AppProvider>
    <RouterProvider router={router} />
   </AppProvider>
   </QueryClientProvider>
  </StrictMode>,
)
