import React from "react";
import { Link } from "react-router-dom";

const Item = () => {
  return (
    <div id="item" className="main_container">
      {/* 裝備 */}
      <div className="sub_container gear">
        <h3 className="title">裝備</h3>
        <div className="box_container">
          <Link className="box" to={`/gear/one_hand_sword`}>
            單手劍
          </Link>
          <Link className="box" to={`/gear/beginner`}>
            頭盔
          </Link>
          <Link className="box" to={`/gear/beginner`}>
            披肩
          </Link>
          <Link className="box" to={`/gear/armor`}>
            鎧甲
          </Link>
          <Link className="box" to={`/gear/beginner`}>
            手套
          </Link>
          <Link className="box" to={`/gear/boots`}>
            鞋子
          </Link>
        </div>
      </div>
      {/* 消耗性道具 */}
      <div className="sub_container consumable">
        <h3 className="title">消耗性道具</h3>
        <div className="box_container">
          <Link className="box" to={`/item/consumable/alchemy`}>
            藥水
          </Link>
        </div>
      </div>
      {/* 混沌卡片 */}
      <div className="sub_container card">
        <h3 className="title">混沌卡片</h3>
        <div className="box_container">
          <Link className="box" to={`/item/card/t1`}>
            T1
          </Link>
          <Link className="box" to={`/item/card/t2`}>
            T2
          </Link>
          <Link className="box" to={`/item/card/t3`}>
            T3
          </Link>
          <Link className="box" to={`/item/card/t4`}>
            T4
          </Link>
          <Link className="box" to={`/item/card/t5`}>
            T5
          </Link>
          <Link className="box" to={`/item/card/t6`}>
            T6
          </Link>
          <Link className="box" to={`/item/card/t7`}>
            T7
          </Link>
        </div>
      </div>
      {/* 其他 */}
      <div className="sub_container else">
        <h3 className="title">其他類道具</h3>
        <div className="box_container">
          <Link className="box" to={`/knowledge/else/essence`}>
            精華
          </Link>
          <Link className="box" to={`/knowledge/system/chaos_dungeon`}>
            混沌石像
          </Link>
          <Link className="box" to={`/knowledge/system/achievements `}>
            成就
          </Link>
          <Link className="box" to={`/knowledge/system/character_title`}>
            稱號
          </Link>
          <Link className="box" to={`/knowledge/system/currency`}>
            貨幣
          </Link>
          <Link className="box" to={`/knowledge/system/box_level`}>
            物品等級
          </Link>
          <Link className="box" to={`/knowledge/system/skill_cost`}>
            資源消耗增幅
          </Link>
          <Link className="box" to={`/knowledge/system/auction`}>
            拍賣
          </Link>
          <Link className="box" to={`/knowledge/system/quality`}>
            品質
          </Link>
          <Link className="box" to={`/knowledge/system/pet`}>
            寵物
          </Link>
        </div>
      </div>

      {/* end */}
    </div>
  );
};

export default Item;
