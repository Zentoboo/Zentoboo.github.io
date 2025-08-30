import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Explore from "./components/content/Explore";
import Background from "./components/content/Backgroud";
import Projects from "./components/content/Projects";
import Contacts from "./components/content/Contacts";
import NotFound from "./components/content/NotFound";
import TicTacToePage from "./components/content/TicTacToePage";

function App() {
  const [isLayoutVisible, setIsLayoutVisible] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              isVisible={isLayoutVisible}
              toggleLayout={() => setIsLayoutVisible(prev => !prev)}
            />
          }
        >
          <Route index element={<Explore />} />
          <Route path="background" element={<Background />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="tictactoe" element={<TicTacToePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
