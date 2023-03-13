import React from "react";
import { useEffect } from "react";
import "./rune_filter.scss";
import { rune_tag_list } from "./rune_tag_list.js";

const Rune_filter = ({
  rune_type,
  set_rune_type,
  filter_bar,
  set_filter_bar,
  language,
  set_language,
}) => {
  let clickBtn = (e) => {
    // 點擊將關鍵字加進搜尋欄，已有的不重複加入
    if (filter_bar.indexOf(e.target.innerText) < 0) {
      if (filter_bar === "") {
        let filter_string = e.target.innerText + " "
        set_filter_bar(filter_string);
      } else {
        let filter_string = filter_bar + e.target.innerText + " "
        set_filter_bar(filter_string);
      }
      // 再次點擊已有的關鍵字，移除該關鍵字
    } else {
      if (filter_bar.indexOf(e.target.innerText) === 0) {
        // 關鍵字排在第一個時
        let new_filter_string = filter_bar.replace(e.target.innerText + " ", "")
        set_filter_bar(new_filter_string);
      } else {
        // 關鍵字不在第一個時
        let new_filter_string =filter_bar.replace(" " + e.target.innerText, "")
        set_filter_bar(new_filter_string);
      }
    }
  };

  // 若曾經造訪此頁面，render時參照最後一次來訪時的狀態
  useEffect(() => {
    if (window.localStorage.getItem("rune_type") !== "link")
      set_rune_type("skill");
  }, []);

  // 若曾經切換rune_type，儲存當下狀態(localStorage)
  useEffect(() => {
    window.localStorage.setItem("rune_type", JSON.stringify(rune_type));
  }, [rune_type]);

  return (
    <div id="rune_filter">
      <div className="rune_page_title">
        {rune_type === "skill" ? "技能符文" : "連結符文"}
      </div>
      <div className="rune_tag_container">
        {/* 切換鈕container */}
        <div className="rune_switch_container">
          {/* 技能頁/連結頁切換按鈕 */}
          {/* <div className="rune_switch_box">
            <span>技能</span>
            <div
              className="rune_switch"
              onClick={() => {
                if (rune_type == "skill") {
                  set_rune_type("link");
                } else {
                  set_rune_type("skill");
                }
              }}
            >
              <div className={`rune_switch_dot ${rune_type}`}></div>
            </div>
            <span>連結</span>
          </div> */}
          {/* 符文名中英切換 */}
          <div className="rune_switch_box">
            <span>中</span>
            <div
              className="rune_switch"
              onClick={() => {
                if (language == "ch") {
                  set_language("en");
                } else {
                  set_language("ch");
                }
              }}
            >
              <div className={`rune_switch_dot ${language}`}></div>
            </div>
            <span>英</span>
          </div>
        </div>

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
      </div>
      <hr />
      {/* end */}
    </div>
  );
};

export default Rune_filter;
