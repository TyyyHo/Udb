import React from "react";
import { Link } from "react-router-dom";
import { combined_data_item } from "./combined_data_item";

const Item_list = () => {
  return (
    <div id="item_list" className="main_container">
      {/* 裝備 */}
      {/* <div className="sub_container gear">
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
      </div> */}
      {/* 消耗性道具 */}
      {/* <div className="sub_container consumable">
        <h3 className="title">消耗性道具</h3>
        <div className="box_container">
          <Link className="box" to={`/item/consumable/alchemy`}>
            藥水
          </Link>
        </div>
      </div> */}
      {/* 一般道具 */}
      <div className="sub_container item">
        <h3 className="title">道具</h3>
        <div className="box_container">
          {combined_data_item
            .filter((i) => {
              return i.page_type == "item_item";
            })
            .map((item, index) => {
              return (
                <Link
                  className={`box ${item.page_type}`}
                  to={`${item.page_title_en}`}
                  key={index}
                >
                  {item.page_title}
                </Link>
              );
            })}
          {/* <Link className="box" to={`/item/essence`}>
            符咒
          </Link>
          <Link className="box" to={`/item/essence`}>
            符石
          </Link> */}
        </div>
      </div>

      {/* end */}
    </div>
  );
};

export default Item_list;
