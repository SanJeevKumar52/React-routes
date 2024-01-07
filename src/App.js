import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";
import Navbar from "./components/Navbar";
import ItemDetail from "./pages/ItemDetail";
import ErrorPage from "./pages/ErrorPage";
function App() {



  const router = createBrowserRouter([

    {
      path: '/',
      element: <Navbar />,
      errorElement:<ErrorPage/>,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        
        {
          path: 'items',
          children: [
            { index: true, element: <Items /> },
            {
              path: ':id',
              element: <ItemDetail />,
            },
          ]
        }
      ],
    },
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  );

}

export default App;
