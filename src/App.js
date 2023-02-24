import "./app.scss";
import "./app_mobile.scss";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// components
import Navigation from "./components/navigation/navigation.jsx";
import To_top from "./components/to_top/to_top.jsx";
import Router_restoration from "./components/router_restoration/router_restoration.jsx";

// pages
import Home from "./page/home/home.jsx";

// information
const Information_list = lazy(()=> import(/* webpackChunkName: "Information_list" */"./page/information/information_list.jsx"))
const Information = lazy(()=> import(/* webpackChunkName: "Information" */"./page/information/information.jsx"))

// rune
const Rune_list = lazy(()=> import(/* webpackChunkName: "Rune_list" */"./page/rune/rune_list.jsx"))
const Skill_page = lazy(()=> import(/* webpackChunkName: "Skill_page" */"./page/rune/rune_page/rune_page.jsx"))

// item
const Item_list = lazy(()=> import(/* webpackChunkName: "Item_list" */"./page/item/item_list.jsx"))
const Item = lazy(()=> import(/* webpackChunkName: "Item" */"./page/item/item.jsx"))

// modfier
const Modifier_list = lazy(()=> import(/* webpackChunkName: "Modifier_list" */"./page/modifier/modifier_list.jsx"))
const Modifier = lazy(()=> import(/* webpackChunkName: "Modifier" */"./page/modifier/modifier.jsx"))



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6Zoj9BQxg2pEO9PACx28YiWoRq0i_QFY",
  authDomain: "undecemberdb.firebaseapp.com",
  projectId: "undecemberdb",
  storageBucket: "undecemberdb.appspot.com",
  messagingSenderId: "3987939648",
  appId: "1:3987939648:web:159cf2aaae908d16b89aa5",
  measurementId: "G-CGT6ZE825D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="basic_bg">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Udb</title>
        <link rel="icon" href="/img/web/icon.ico" type="image/ico" />
        <link rel="apple-touch-icon" href="/img/moon.png" />
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
        <Suspense fallback={<div>加載中</div>}>
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
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
