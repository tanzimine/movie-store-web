import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MovieDetails from './pages/MovieDetails'
const router = createBrowserRouter([
  {
    path:"/",
    element: <App></App>
  },
  {
    path: "/movies/:id",
    element: <MovieDetails />, 
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
