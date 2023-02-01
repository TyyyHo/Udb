import React from "react";
import { Link } from "react-router-dom";

const Box_module = ({ className, rune_data, filter_bar }) => {
  let filter_by_tag = (rune) => {
    // 搜尋字串轉陣列
    let filter_bar_array = filter_bar.split(" ");
    // 資料tag轉字串
    let tag = rune.rune_tag.join("");
    // 搜尋欄若為空字串，return所有技能
    if (filter_bar == "") {
      return rune;
    } else {
      // 搜尋陣列中，有符合tag的技能就return
      if (
        filter_bar_array.every((arr_ele) => {
          return tag.indexOf(arr_ele) >= 0 
        })
      ) {
        return rune;
      }
    }
  };

  return (
    <div className={className}>
      {rune_data
        .filter((rune) => {
          return filter_by_tag(rune);
        })
        .map((item, index) => {
          return (
            <Link className="rune_box" key={index} to={item.link_url}>
              <img src={item.rune_img_url} alt="rune_img" className={index}/>
              <span className="rune_box_name">{item.rune_name_ch}</span>
            </Link>
          );
        })}
    </div>
  );
};

export { Box_module };
