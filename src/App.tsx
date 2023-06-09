import React from "react";
import { RecoilRoot } from "recoil";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Detail from "./pages/Detail";
import Add from "./pages/Add";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "home/:pageCount",
    element: <Home />,
  },
  {
    path: "todos/:todoId",
    element: <Detail />,
  },
  {
    path: "add",
    element: <Add />,
  },
]);

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
