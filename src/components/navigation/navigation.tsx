import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./navigation.scss";
import "./navigation_mobile.scss";

const Navigation = () => {
  // mobile時navi縮放狀態
  const [navi_switch, set_navi_switch] = useState("off");
  // 換頁後收起navi
  const cancel_navi = () => {
    set_navi_switch("off");
  };

  return (
    <div id="navigation">
      <div id="logo">
        <Link id="web_name" to={`/`}>
          <img src="/img/logo/logo_big.png" alt="logo" />
        </Link>
      </div>

      <div
        className="navi_btn"
        onClick={() => {
          set_navi_switch(() => {
            if (navi_switch === "on") {
              return "off";
            }
            return "on";
          });
        }}
      >
        <div className="navi_toggler material-icons">menu</div>
      </div>

      <div className={`navi_container ${navi_switch}`}>
        <Link className="navi_item" to={`information`} onClick={cancel_navi}>
          情報
        </Link>
        <Link className="navi_item" to={`rune`} onClick={cancel_navi}>
          符文
        </Link>
        <Link className="navi_item" to={`item`} onClick={cancel_navi}>
          物品
        </Link>
        <Link className="navi_item" to={`modifier`} onClick={cancel_navi}>
          詞綴
        </Link>
      </div>

      {/* end */}
    </div>
  );
};

export default Navigation;
