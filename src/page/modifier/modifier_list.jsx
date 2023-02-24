import React from "react";
import { Link } from "react-router-dom";
import { combined_data_modifier } from "./combined_data_modifier";

const Modifier_list = () => {
  const matched_data = combined_data_modifier.filter(
    (item) => item.page_type === "modifier_equipment"
  );
  return (
    <div id="modifier_list" className="main_container">
      <div className="sub_container modifier">
        <h3 className="title">裝備權能詞綴</h3>
        <div className="box_container">
          {matched_data.map((item, index) => {
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
