import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import "./home_mobile.scss";

const Home = () => {
  return (
    <div id="home" className="main_container">
      <div id="first_pined" className="pined_post">
        <div id="web_info" className="sub_container">
          本網站為惡月十三的資料庫，提供遊戲機制、物品與技能的資料彙整。
          <br />
          {/* 歡迎轉載網站內容，但請同時附上來源連結，謝謝！ */}
        </div>
      </div>

      <div id="second_pined" className="pined_post">
        <div id="official_info" className="sub_container">
          <h3 className="title">官方資訊</h3>
          <div className="third_container">
            <div className="content">
              固定維護：每周三 7:00~11:00 AM (台灣時間)
            </div>
            <div className="content">
              突襲重置：每周一/四 8:00 AM (台灣時間)
            </div>
          </div>
        </div>
        <div id="index" className="sub_container">
          <h3 className="title">快速索引</h3>
          <div className="third_container">
            <Link className="content box" to={`knowledge/common_questions`}>
              常見問題
            </Link>
            <Link className="content box" to={`rune`}>
              技能
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
