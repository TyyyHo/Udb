import React from "react";
import { Link } from "react-router-dom";
import "./navigation.scss";
import "./navigation_mobile.scss";

const Navigation = () => {
  return (
    <div id="navigation">
      <div id="logo">
        <Link id="web_name" to={`/`}>
          <img src="./img/logo/logo_big.png" alt="logo" />
        </Link>
      </div>

      <div id="navi_container">
        <Link className="navi_item" to={`knowledge`}>
          知識
        </Link>
        <Link className="navi_item" to={`rune`}>
          技能
        </Link>
        {/* <Link className="navi_item" to={`item`}>物品</Link> */}
      </div>
    </div>
  );
};

export default Navigation;
