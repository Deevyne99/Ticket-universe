import { createBrowserRouter } from 'react-router-dom'

import {
  Home,
  Events,
  Login,
  Register,
  SingleEvent,
  FavouriteEvents,
  Profile,
  NotFound,
} from './pages'
import App from './App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/events', element: <Events /> },
      { path: '/register', element: <Register /> },
      { path: '/login', element: <Login /> },
      { path: '/events/:id', element: <SingleEvent /> },
      { path: '/favourite-events', element: <FavouriteEvents /> },
    ],
  },
  { path: '/user/:id', element: <Profile /> },
  { path: '*', element: <NotFound /> },
])
export default router
