import React from "react";
import { useParams } from "react-router-dom";

// data
import { combined_data_item } from "./combined_data_item.js";

// components
import Page_form from "../../components/page_module/page_form/page_form";

const Item = () => {
  // 網址參數
  let { item_obj } = useParams();
  // 選取相符資料
  let matched_data = combined_data_item.filter((item) => {
    return item.page_title_en == item_obj;
  })[0];

  return (
    <div id="item" className="main_container">
      <Page_form data={matched_data} />
    </div>
  );
};

export default Item;
