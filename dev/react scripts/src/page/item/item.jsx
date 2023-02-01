import React from "react";
import { useParams } from "react-router-dom";

// data
import { combined_data_item } from "./combined_data_item.js";

// components
import Essence_page from "../../components/page_module/essence_page/essence_page.jsx";

const Item = () => {
  // 網址參數
  let { item_obj } = useParams();
  // 選取相符資料
  let matched_data = combined_data_item.filter((item) => {
    return item.page_title_en == item_obj;
  })[0];

  return (
    <div id="item" className="main_container">
      <Essence_page data={matched_data} />
    </div>
  );
};

export default Item;
