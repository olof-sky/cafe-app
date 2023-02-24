import { React } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DocumentMeta from "react-document-meta";
import MainContainer from "./components/layout/MainContainer";
import Main from "./pages/Main";
import Header from "./components/layout/Header";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import NoMatch from "./pages/NoMatch";
import "./index.css";

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
const AppLayout = () => (
  <DocumentMeta {...meta}>
    <Header />
    <NavBar />
    <MainContainer />
    <Footer />
  </DocumentMeta>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
