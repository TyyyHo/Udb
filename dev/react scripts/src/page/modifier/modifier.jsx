import React from "react";
import { useParams } from "react-router-dom";

// data
import { combined_data_modifier } from "./combined_data_modifier.js";

// components
import Modifier_module from "../../components/modifier_module/modifier_module";

const Item = () => {

  // 網址參數
  let { modifier_obj } = useParams();
  // 選取相符資料
  let matched_data = combined_data_modifier.filter((item) => {
    return item.page_title_en === modifier_obj;
  })[0];


  return (
    <div id="modifier" className="main_container">
      <Modifier_module data={matched_data} />
    </div>
  );
};

export default Item;
