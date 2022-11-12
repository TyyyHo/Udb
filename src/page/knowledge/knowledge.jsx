import React from "react";
import { Link } from "react-router-dom";

const Knowledge = () => {
  return (
    <div id="knowledge" className="main_container">
      {/* 新手指引 */}
      <div className="sub_container beginner">
        <h3 className="title">入門指南</h3>
        <div className="box_container">
          <Link className="box" to={`/knowledge/common_questions`}>
            常見問題
          </Link>
          {/* <Link className="box" to={`/knowledge/get_started_1`}>
            開局
          </Link> */}
        </div>
      </div>
      {/* 遊戲系統 */}
      <div className="sub_container system">
        <h3 className="title">遊戲系統</h3>
        <div className="box_container">
          <Link className="box" to={`/knowledge/zodiac`}>
            黃道宮
          </Link>
          <Link className="box" to={`/knowledge/chaos_dungeon`}>
            混沌石像
          </Link>
          <Link className="box" to={`/knowledge/achievements `}>
            成就
          </Link>
          <Link className="box" to={`/knowledge/character_title`}>
            稱號
          </Link>
          <Link className="box" to={`/knowledge/currency`}>
            貨幣
          </Link>
          <Link className="box" to={`/knowledge/box_level`}>
            物品等級
          </Link>
          <Link className="box" to={`/knowledge/skill_cost`}>
            資源消耗增幅
          </Link>
          <Link className="box" to={`/knowledge/auction`}>
            拍賣
          </Link>
          <Link className="box" to={`/knowledge/quality`}>
            品質
          </Link>
          <Link className="box" to={`/knowledge/pet`}>
            寵物
          </Link>
        </div>
      </div>
      {/* 遊戲機制 */}
      <div className="sub_container mechanics">
        <h3 className="title">遊戲機制</h3>
        <div className="box_container">
          <Link className="box" to={`/knowledge/system/survive`}>
            生存
          </Link>
          <Link className="box" to={`/knowledge/system/critical_rate`}>
            暴擊
          </Link>
          <Link className="box" to={`/knowledge/system/critical_damage`}>
            暴擊傷害
          </Link>
          <Link className="box" to={`/knowledge/system/status`}>
            異常狀態
          </Link>
          <Link className="box" to={`/knowledge/system/hit_rate`}>
            命中
          </Link>
        </div>
      </div>
      {/* end */}
    </div>
  );
};

export default Knowledge;
