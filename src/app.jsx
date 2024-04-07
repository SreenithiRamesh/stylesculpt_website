import ReactDOM from "react-dom/client";
import "./index.css";
// default import
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductLayout from "./components/ProductLayout/ProductLayout";
import { ProductionDataSet } from "./api/MockData";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import { LogoImg } from "./assests/img";
import Herosection from "./components/Herosection/Herosection";
import MyCart from "./components/MyCart/MyCart";
/*
({name,brand,price,rating})===destructuring on fly */
const AppLayout = () => {
  return (
    <>
      <Header />
      {/*
            if path===/Contact ==> <Contact/>
            if path===/Home ==> <Home/>
            if path===/ ==> <Body/>>
            */}
      <Outlet />
      {/* <ProductLayout /> */}
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Herosection />,
      },
      {
        path: "/Products",
        element: <ProductLayout />,
      },
      {
        path: "/MyCart",
        element: <MyCart />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
