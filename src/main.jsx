import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SingleProductDetails from './SingleProductDetails.jsx';
import UserContext from './UserContext.jsx';
import Wishlist from './Wishlist.jsx';
import Cart from './Cart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/singleproductdetails/:id/:category/:name?",
    element: <SingleProductDetails />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

createRoot(document.getElementById('root')).render(
  <UserContext>
    <RouterProvider router={router} />
  </UserContext>,
)
