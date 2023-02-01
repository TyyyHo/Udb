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
import Information_list from "./page/information/information_list.jsx";
import Information from "./page/information/information.jsx";

// rune
import Rune_list from "./page/rune/rune_list.jsx";
import Skill_page from "./page/rune/rune_box/module/skill_page/skill_page.jsx";

// item
import Item_list from "./page/item/item_list.jsx";
import Item from "./page/item/item.jsx";

// modfier
import Modifier_list from "./page/modifier/modifier_list.jsx";
import Modifier from "./page/modifier/modifier.jsx";

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
            <Route index element={<Information_list />} />
            <Route path=":information_obj" element={<Information />} />
          </Route>
          {/* rune */}
          <Route path="/rune">
            <Route index element={<Rune_list />} />
            <Route path=":rune_obj" element={<Skill_page />} />
          </Route>
          {/* item */}
          <Route path="/item">
            <Route index element={<Item_list />} />
            <Route path=":item_obj" element={<Item />} />
          </Route>
          {/* modifier */}
          <Route path="/modifier">
            <Route index element={<Modifier_list />} />
            <Route path=":modifier_obj" element={<Modifier />} />
          </Route>

          {/* 404 */}
          {/* <Route path="*" element={<h1>404 not find</h1>} /> */}
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
