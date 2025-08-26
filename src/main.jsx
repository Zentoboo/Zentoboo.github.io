import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Explore from "./components/content/Explore";
import Background from "./components/content/Backgroud";
import Projects from "./components/content/Projects";
import Contacts from "./components/content/Contacts";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Explore />} />
        <Route path="background" element={<Background />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  </BrowserRouter>
);