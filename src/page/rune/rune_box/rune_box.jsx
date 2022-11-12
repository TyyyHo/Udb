import React from "react";
import { Link } from "react-router-dom";
import "./rune_box.scss";
import "./rune_box_mobile.scss";
import { Box_module } from "./module/box/box_module.jsx";

// data
import { red_skill } from "./skill_data/red_skill.js";
import { green_skill } from "./skill_data/green_skill.js";
import { blue_skill } from "./skill_data/blue_skill.js";
import { red_link } from "./link_data/red_link.js";
import { green_link } from "./link_data/green_link.js";
import { blue_link } from "./link_data/blue_link.js";

const Rune_box = ({ rune_type, filter_bar }) => {
  return (
    <div>
      {/* box_container */}
      <div className="rune_box_container">
        {
          {
            skill: (
              <>
                {/* 紅底技能 */}
                <Box_module
                  className={"rune_red_container"}
                  rune_data={red_skill}
                  filter_bar={filter_bar}
                />
                {/* 綠底技能 */}
                <Box_module
                  className={"rune_green_container"}
                  rune_data={green_skill}
                  filter_bar={filter_bar}
                />
                {/* 藍底技能 */}
                <Box_module
                  className={"rune_blue_container"}
                  rune_data={blue_skill}
                  filter_bar={filter_bar}
                />
              </>
            ),
            link: (
              <>
                {/* 紅底技能 */}
                <Box_module
                  className={"rune_red_container"}
                  rune_data={red_link}
                  filter_bar={filter_bar}
                />
                {/* 綠底技能 */}
                <Box_module
                  className={"rune_green_container"}
                  rune_data={green_link}
                  filter_bar={filter_bar}
                />
                {/* 藍底技能 */}
                <Box_module
                  className={"rune_blue_container"}
                  rune_data={blue_link}
                  filter_bar={filter_bar}
                />
              </>
            ),
          }[rune_type]
        }
      </div>

      {/* end */}
    </div>
  );
};

export default Rune_box;
