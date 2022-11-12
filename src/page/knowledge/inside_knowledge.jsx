import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// data
import { combined_data_knowledge } from "./combined_data_knowledge.js";

// components
import Page from "../../components/page_module/page.jsx";

const Inside_knowledge = () => {
  // 網址參數
  let { knowledge_obj } = useParams();
  // 選取相符資料
  let matched_data = combined_data_knowledge.filter((item) => {
    return item.page_title_en == knowledge_obj;
  })[0];

  return (
    <div id="inside_knowledge" className="main_container">
      <Page data={matched_data} />
    </div>
  );
};

export default Inside_knowledge;
