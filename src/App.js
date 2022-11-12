import "./app.scss";
import "./app_mobile.scss";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import Navigation from "./components/navigation/navigation.jsx";
// pages
import Home from "./page/home/home.jsx";

// knowledge
import Knowledge from "./page/knowledge/knowledge.jsx";
import Inside_knowledge from "./page/knowledge/inside_knowledge.jsx";

// rune
import Rune_list from "./page/rune/rune_list.jsx";
import Skill_page from "./page/rune/rune_box/module/skill_page/skill_page.jsx";

// item
import Item from "./page/item/item.jsx";

function App() {
  const skill_url = "shout_of_terror";
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* knowledge */}
          <Route path="/knowledge">
            <Route index element={<Knowledge />} />
            <Route path=":knowledge_obj" element={<Inside_knowledge />} />
          </Route>

          {/* rune */}
          <Route path="/rune">
            <Route index element={<Rune_list />} />
            <Route path=":rune_name" element={<Skill_page />} />
          </Route>
          {/* item */}
          <Route path="/item" element={<Item />} />

          {/* 404 */}
          {/* <Route path="*" element={<h1>404 not find</h1>} /> */}
          {/* <Route path="/knowledge/*" element={<Navigate to="/knowledge" replace />} /> */}
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
