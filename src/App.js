import React from "react";
import DocumentMeta from "react-document-meta";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Header from "./components/Header";
import Main from "./pages/Main";

import "./index.css";

const meta = {
  title: "Princess konditori",
  description: "Konditori.",
  meta: {
    charset: "utf-8",
    name: {
      keywords: "fika, café",
    },
  },
};

function App() {
  return (
    <DocumentMeta {...meta}>
      <Header />
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </DocumentMeta>
  );
}

function Layout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to={process.env.REACT_APP_BASE_URL}>Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
