import React from "react";
import { useState } from "react";

// componenets
import Rune_filter from "./rune_filter/rune_filter.jsx";
import Rune_box from "./rune_box/rune_box.jsx";

const Rune_list = () => {
  const [rune_type, set_rune_type] = useState("skill");
  const [filter_bar, set_filter_bar] = useState("");
  return (
    <div id="rune_list" className="main_container">
      <div className="sub_container">
        {/* filter */}
        <Rune_filter
          rune_type={rune_type}
          set_rune_type={set_rune_type}
          filter_bar={filter_bar}
          set_filter_bar={set_filter_bar}
        />
        {/* box */}
        <Rune_box rune_type={rune_type} filter_bar={filter_bar} />
      </div>
      {/* end */}
    </div>
  );
};

export default Rune_list;
