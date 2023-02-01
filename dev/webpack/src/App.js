import "./app.scss";
import "./app_mobile.scss";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import Navigation from "./components/navigation/navigation.jsx";
import To_top from "./components/to_top/to_top.jsx";
// pages
import Home from "./page/home/home.jsx";

// information
import Information from "./page/information/information.jsx";
import Inside_information from "./page/information/inside_information.jsx";

// rune
import Rune_list from "./page/rune/rune_list.jsx";
import Skill_page from "./page/rune/rune_box/module/skill_page/skill_page.jsx";

// item
import Item from "./page/item/item.jsx";

function App() {
  return (
    <>
      {/* google icon */}
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <To_top />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* information */}
          <Route path="/information">
            <Route index element={<Information />} />
            <Route path=":information_obj" element={<Inside_information />} />
          </Route>

          {/* rune */}
          <Route path="/rune">
            <Route index element={<Rune_list />} />
            <Route path=":rune_name" element={<Skill_page />} />
          </Route>
          {/* item */}
          {/* <Route path="/item" element={<Item />} /> */}

          {/* 404 */}
          {/* <Route path="*" element={<h1>404 not find</h1>} /> */}
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
