import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./to_top.scss";
import "./to_top_mobile.scss";

const To_top = () => {
  const [to_top_btn, set_to_top_btn] = useState(false);
  const go_to_top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        set_to_top_btn(true);
      } else {
        set_to_top_btn(false);
      }
    });
  }, [to_top_btn]);

  // 根據狀態判定是否顯示

  if (to_top_btn) {
    return (
      <>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <div className={`to_top ${to_top_btn}`}>
          <div className="material-icons" onClick={go_to_top}>
            arrow_upward
          </div>
        </div>
      </>
    );
  }

  // end
};

export default To_top;