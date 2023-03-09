import { React, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DocumentMeta from "react-document-meta";
import MainContainer from "./components/layout/MainContainer";
import Main from "./pages/Main";
import Header from "./components/layout/Header";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import NoMatch from "./pages/NoMatch";
import Provider from "./data/context";
import Loader from "./components/Loader";
import "./index.css";
import Admin from "./pages/Admin";

const meta = {
  title: "Princess konditori",
  description: "Konditori.",
  meta: {
    charset: "utf-8",
    name: {
      keywords:
        "fika, cafe, café, fika örebro, cafe örebro, tårta, beställa tårta örebro",
    },
  },
};

const AppLayout = () => {
  return (
    <Provider>
      <DocumentMeta {...meta}>
        <Header />
        <NavBar />
        <MainContainer />
        <Footer />
      </DocumentMeta>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Suspense fallback={<Loader />}>
    <RouterProvider router={router} />
  </Suspense>
);
