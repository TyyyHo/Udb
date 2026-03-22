import "./app.css"
import "./app_mobile.css"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Suspense, lazy } from "react"

import { Helmet } from "react-helmet"
// pages
import Home from "./page/home/home"
import Loading from "./components/loading/loading"
// components
import Navigation from "./components/navigation/navigation"
import RouterRestoration from "./components/router_restoration/router_restoration"
import ToTop from "./components/to_top/to_top"
import { getAnalytics } from "firebase/analytics"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"

// information
const InformationList = lazy(
  () =>
    import(
      /* webpackChunkName: "Information_list" */ "./page/information/information_list"
    )
)
const Information = lazy(
  () =>
    import(
      /* webpackChunkName: "Information" */ "./page/information/information"
    )
)

// rune
const RuneList = lazy(
  () => import(/* webpackChunkName: "Rune_list" */ "./page/rune/rune_list")
)
const SkillPage = lazy(
  () =>
    import(
      /* webpackChunkName: "Skill_page" */ "./page/rune/rune_page/rune_page"
    )
)

// item
const ItemList = lazy(
  () => import(/* webpackChunkName: "Item_list" */ "./page/item/item_list")
)
const Item = lazy(
  () => import(/* webpackChunkName: "Item" */ "./page/item/item")
)

// modfier
const ModifierList = lazy(
  () =>
    import(
      /* webpackChunkName: "Modifier_list" */ "./page/modifier/modifier_list"
    )
)
const Modifier = lazy(
  () => import(/* webpackChunkName: "Modifier" */ "./page/modifier/modifier")
)

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
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
getAnalytics(app)

function App() {
  return (
    <div className="basic_bg">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Udb - 惡月十三中文資料庫</title>
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

      <ToTop />
      <BrowserRouter>
        <Navigation />
        <RouterRestoration />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* information */}
            <Route path="/information">
              <Route index element={<InformationList />} />
              <Route path=":information_obj" element={<Information />} />
            </Route>
            {/* rune */}
            <Route path="/rune">
              <Route index element={<RuneList />} />
              <Route path=":rune_obj" element={<SkillPage />} />
            </Route>
            {/* item */}
            <Route path="/item">
              <Route index element={<ItemList />} />
              <Route path=":item_obj" element={<Item />} />
            </Route>
            {/* modifier */}
            <Route path="/modifier">
              <Route index element={<ModifierList />} />
              <Route path=":modifier_obj" element={<Modifier />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
