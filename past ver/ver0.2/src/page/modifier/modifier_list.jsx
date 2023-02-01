import React from "react";
import { Link } from "react-router-dom";
import { combined_data_modifier } from "./combined_data_modifier";

const Modifier_list = () => {
  return (
    <div id="modifier_list" className="main_container">
      {/* 一般道具 */}
      <div className="sub_container modifier">
        <h3 className="title">裝備權能詞綴</h3>
        <div className="box_container">
          {combined_data_modifier
            .filter((i) => {
              return i.page_type === "modifier_equipment";
            })
            .map((item, index) => {
              return (
                <Link
                  className={`box ${item.page_type}`}
                  to={`/modifier/${item.page_title_en}`}
                  key={index}
                >
                  {item.page_title}
                </Link>
              );
            })}
        </div>
      </div>

      {/* end */}
    </div>
  );
};

export default Modifier_list;
