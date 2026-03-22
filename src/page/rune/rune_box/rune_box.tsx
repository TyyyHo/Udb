import React from "react";
import "./rune_box.scss";
import "./rune_box_mobile.scss";
import { BoxModule } from "../../../components/skill_box/box_module";

// data
import { red_skill } from "./skill_data/red_skill";
import { green_skill } from "./skill_data/green_skill";
import { blue_skill } from "./skill_data/blue_skill";
import { red_link } from "./link_data/red_link";
import { green_link } from "./link_data/green_link";
import { blue_link } from "./link_data/blue_link";

const RuneBox = ({ rune_type, filter_bar, language }) => {
  return (
    <div>
      {/* box_container */}
      <div className="rune_box_container">
        {
          {
            skill: (
              <>
                {/* 紅底技能 */}
                <BoxModule
                  className={"rune_red_container"}
                  rune_data={red_skill}
                  filter_bar={filter_bar}
                  language={language}
                />
                {/* 綠底技能 */}
                <BoxModule
                  className={"rune_green_container"}
                  rune_data={green_skill}
                  filter_bar={filter_bar}
                  language={language}
                />
                {/* 藍底技能 */}
                <BoxModule
                  className={"rune_blue_container"}
                  rune_data={blue_skill}
                  filter_bar={filter_bar}
                  language={language}
                />
              </>
            ),
            link: (
              <>
                {/* 紅底技能 */}
                <BoxModule
                  className={"rune_red_container"}
                  rune_data={red_link}
                  filter_bar={filter_bar}
                  language={language}
                />
                {/* 綠底技能 */}
                <BoxModule
                  className={"rune_green_container"}
                  rune_data={green_link}
                  filter_bar={filter_bar}
                  language={language}
                />
                {/* 藍底技能 */}
                <BoxModule
                  className={"rune_blue_container"}
                  rune_data={blue_link}
                  filter_bar={filter_bar}
                  language={language}
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

export default RuneBox;
