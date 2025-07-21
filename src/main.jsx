import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Explore from "./components/Explore";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Explore />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  </BrowserRouter>
);