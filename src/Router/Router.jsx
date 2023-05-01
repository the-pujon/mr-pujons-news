import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News/News";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Category />,
        loader: () =>
          fetch(`https://mr-pujons-news-server-the-pujon.vercel.app/news`),
      },
      {
        path: "categories/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(
            `https://mr-pujons-news-server-the-pujon.vercel.app/categories/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRouter>
            <News />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://mr-pujons-news-server-the-pujon.vercel.app/news/${params.id}`
          ),
      },
    ],
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
