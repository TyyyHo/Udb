import "./app.scss";
import "./app_mobile.scss";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";

// components
import Navigation from "./components/navigation/navigation.jsx";
import To_top from "./components/to_top/to_top.jsx";
import Router_restoration from "./components/router_restoration/router_restoration.jsx";

// pages
import Home from "./page/home/home.jsx";

// information
import Information_list from "./page/information/information_list.jsx";
import Information from "./page/information/information.jsx";

// rune
import Rune_list from "./page/rune/rune_list.jsx";
import Skill_page from "./page/rune/rune_page/rune_page.jsx";

// item
import Item_list from "./page/item/item_list.jsx";
import Item from "./page/item/item.jsx";

// modfier
import Modifier_list from "./page/modifier/modifier_list.jsx";
import Modifier from "./page/modifier/modifier.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { firebase } from "./firebaseConfig";


function App() {
  firebase(initializeApp, getAnalytics);
  return (
    <div className="basic_bg">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Udb</title>
        <link rel="icon" href="/img/web/icon.ico" type="image/ico" />
        <link rel="apple-touch-icon" href="/img/moon.ipng" />
        <meta name="description" content="惡月十三中文資料庫" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Udb" />
        <meta property="og:description" content="惡月十三中文資料庫" />
        <meta
          property="og:image"
          content="https://undecember.line.games/static/launching/common/images/pc/media/new_undecember_media_01.jpg"
        ></meta>
      </Helmet>
      {/* google icon */}
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons&display=block&overflow=hidden"
        rel="stylesheet"
      />

      <To_top />
      <BrowserRouter>
        <Navigation />
        <Router_restoration />
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
    </div>
  );
}

export default App;
