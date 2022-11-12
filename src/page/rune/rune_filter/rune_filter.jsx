import React from "react";
import { useState } from "react";
import "./rune_filter.scss";
import { rune_tag_list } from "./rune_tag_list.js";

const Rune_filter = ({
  rune_type,
  set_rune_type,
  filter_bar,
  set_filter_bar,
}) => {
  let clickBtn = (e) => {
    // 點擊將關鍵字加進搜尋欄，已有的不重複加入
    if (filter_bar.indexOf(e.target.innerText) < 0) {
      if (filter_bar == "") {
        set_filter_bar(e.target.innerText);
      } else {
        set_filter_bar(filter_bar + " " + e.target.innerText);
      }
    }
  };

  return (
    <div id="rune_filter">
      <div className="rune_page_title">主動技能</div>
      <div className="rune_tag_container">
        {/* 技能頁/連結頁切換按鈕 */}
        {/* <div
          className="btn_rune_type"
          onClick={() => {
            if (rune_type == "skill") {
              set_rune_type("link");
            } else {
              set_rune_type("skill");
            }
          }}
        >
          <div className="btn_rune_type_switch">{"技能/連結切換"}</div>
        </div> */}

        {/* rune tag list */}
        {rune_tag_list.map((item, i) => {
          return (
            <button key={i} onClick={(e) => clickBtn(e)}>
              {item}
            </button>
          );
        })}
      </div>

      {/* 搜尋欄 */}
      <div className="rune_filter_bar_container">
        <input
          type="text"
          className="rune_filter_bar"
          placeholder="輸入多個條件時，需用空格隔開"
          value={filter_bar}
          onChange={(e) => set_filter_bar(e.target.value)}
        />
        <button onClick={(e) => set_filter_bar("")}>清除</button>
        {/* <div>(輸入多個條件時，需用空格隔開)</div> */}
      </div>
      <hr />
      {/* end */}
    </div>
  );
};

export default Rune_filter;
