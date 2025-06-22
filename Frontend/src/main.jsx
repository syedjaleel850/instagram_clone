import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Viewstory from './Viewstory'
import Profile from './Profile'
 const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/story/:id/:tot',
      element:<Viewstory/>
    },
    {
      path:'/profile',
      element:<Profile />
    }
  ]
 )
createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
  
)
