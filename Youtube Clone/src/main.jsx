import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Home from './components/Pages/Home.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import PlayVideo from './components/Pages/PlayVideo.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:
    [
      {
        path:"",
        element: <Home/>,
      },
      {
        path:"/play-video/:categoryId/:videoId",
        element:<PlayVideo />        
      }
    ]

  }
  
],)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
