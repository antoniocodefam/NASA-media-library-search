import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from '../../pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

export default function AppRouter(){
return <RouterProvider router={router} />
}