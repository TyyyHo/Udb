import React from "react";
import { useParams } from "react-router-dom";

// data
import { combined_data_information } from "./combined_data_information.js";

// components
import Page from "../../components/page_module/page.jsx";

const Inside_information = () => {
  // 網址參數
  let { information_obj } = useParams();
  // 選取相符資料
  let matched_data = combined_data_information.filter((item) => {
    return item.page_title_en == information_obj;
  })[0];

  return (
    <div id="inside_information" className="main_container">
      <Page data={matched_data} />
    </div>
  );
};

export default Inside_information;
