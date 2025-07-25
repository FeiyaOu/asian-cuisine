import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home';
import Menu, { loader as MenuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder from './features/order/CreateOrder';
import Order, { loader as OrderLoader } from './features/order/Order';
import Error from './ui/Error';
import AppLayout from './ui/AppLayout';

const router = createHashRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/menu',
        element: <Menu />,
        loader: MenuLoader,
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      { path: '/order/new', element: <CreateOrder /> },
      { path: '/order/:orderId', element: <Order />, loader: OrderLoader },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
