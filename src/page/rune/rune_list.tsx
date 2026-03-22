import React from "react";
import { useState } from "react";

// componenets
import RuneFilter from "./rune_filter/rune_filter";
import RuneBox from "./rune_box/rune_box";

const RuneList = () => {
  // 技能/連結切換
  const [runeType, setRuneType] = useState("skill");
  // 搜尋條件
  const [filterBar, setFilterBar] = useState("");
  const [language, set_language] = useState("ch");
  return (
    <div id="rune_list" className="main_container">
      <div className="sub_container">
        {/* filter */}
        <RuneFilter
          rune_type={runeType}
          set_rune_type={setRuneType}
          filter_bar={filterBar}
          set_filter_bar={setFilterBar}
          language={language}
          set_language={set_language}
        />
        {/* box */}
        <RuneBox rune_type={runeType} filter_bar={filterBar} language={language}/>
      </div>
      {/* end */}
    </div>
  );
};

export default RuneList;
