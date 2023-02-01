import React from "react";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <div id="information" className="main_container">
      {/* 入門指南 */}
      <div className="sub_container beginner">
        <h3 className="title">入門指南</h3>
        <div className="box_container">
          <Link className="box" to={`/information/common_questions`}>
            常見問題
          </Link>
          {/* <Link className="box" to={`/information/trivia`}>
            遊戲冷知識
          </Link> */}
          <Link className="box" to={`/information/six_link`}>
            取得六邊技能
          </Link>
          {/* <Link className="box" to={`/information/get_started_1`}>
            開局
          </Link> */}
        </div>
      </div>
      {/* 遊戲系統 */}
      <div className="sub_container system">
        <h3 className="title">遊戲系統</h3>
        <div className="box_container">
        <Link className="box" to={`/information/currency`}>
            貨幣
          </Link>
          <Link className="box" to={`/information/zodiac`}>
            黃道宮
          </Link>
          <Link className="box" to={`/information/chaos_dungeon`}>
            混沌石像
          </Link>
          <Link className="box" to={`/information/character_title`}>
            稱號
          </Link>
          <Link className="box" to={`/information/skill_cost`}>
            資源消耗增幅
          </Link>
          <Link className="box" to={`/information/spire_of_barrier`}>
            結界尖塔
          </Link>
          {/* <Link className="box" to={`/information/item_level`}>
            物品等級
          </Link>
          <Link className="box" to={`/information/auction`}>
            拍賣
          </Link>
          <Link className="box" to={`/information/raid`}>
            突襲
          </Link>
          <Link className="box" to={`/information/achievements `}>
            成就
          </Link>
          <Link className="box" to={`/information/quality`}>
            品質
          </Link>
          <Link className="box" to={`/information/pet`}>
            寵物
          </Link> */}
        </div>
      </div>
      {/* 遊戲機制 */}
      <div className="sub_container mechanics">
        <h3 className="title">遊戲機制</h3>
        <div className="box_container">
          <Link className="box" to={`/information/rarity`}>
            稀有度
          </Link>
          <Link className="box" to={`/information/project`}>
            投射體
          </Link>
          {/* <Link className="box" to={`/information/status`}>
            異常狀態
          </Link>
          <Link className="box" to={`/information/system/survive`}>
            生存
          </Link>
          <Link className="box" to={`/information/system/hit_rate`}>
            命中
          </Link>
          <Link className="box" to={`/information/system/critical_rate`}>
            暴擊
          </Link>
          <Link className="box" to={`/information/system/critical_damage`}>
            暴擊傷害
          </Link> */}
        </div>
      </div>
      {/* end */}
    </div>
  );
};

export default Information;
