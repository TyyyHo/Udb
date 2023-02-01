import React from "react";
import { Link } from "react-router-dom";
import { combined_data_information } from "./combined_data_information";

const Information_list = () => {
  return (
    <div id="information_list" className="main_container">
      {/* 入門指南 */}
      <div className="sub_container beginner">
        <h3 className="title">入門指南</h3>
        <div className="box_container">
          {combined_data_information
            .filter((i) => {
              return i.page_type == "information_beginner";
            })
            .map((item, index) => {
              return (
                <Link
                className={`box ${item.page_type}`}
                  to={`/information/${item.page_title_en}`}
                  key={index}
                >
                  {item.page_title}
                </Link>
              );
            })}
          {/* <Link className="box" to={`/information/trivia`}>
            遊戲冷知識
          </Link> */}
        </div>
      </div>
      {/* 遊戲系統 */}
      <div className="sub_container system">
        <h3 className="title">遊戲系統</h3>
        <div className="box_container">
          {combined_data_information
            .filter((i) => {
              return i.page_type == "information_system";
            })
            .map((item, index) => {
              return (
                <Link
                  className={`box ${item.page_type}`}
                  to={`/information/${item.page_title_en}`}
                  key={index}
                >
                  {item.page_title}
                </Link>
              );
            })}
          {/* <Link className="box" to={`/information/currency`}>
            貨幣
          </Link> */}
        </div>
      </div>
      {/* 遊戲機制 */}
      <div className="sub_container mechanics">
        <h3 className="title">遊戲機制</h3>
        <div className="box_container">
          {combined_data_information
            .filter((i) => {
              return i.page_type == "information_mechanics";
            })
            .map((item, index) => {
              return (
                <Link
                className={`box ${item.page_type}`}
                  to={`/information/${item.page_title_en}`}
                  key={index}
                >
                  {item.page_title}
                </Link>
              );
            })}
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

export default Information_list;
