// equipment
// import { one_hand_weapon } from "./data/one_hand_weapon";
import { weapon } from "./data/weapon";
import { helmet } from "./data/helmet";
import { spaulders } from "./data/spaulders";
import { armor } from "./data/armor";
import { gloves } from "./data/gloves";
import { shoes } from "./data/shoes";
// import { shield } from "./data/shield";
import { quiver } from "./data/quiver";
import { necklace } from "./data/necklace";
import { ring } from "./data/ring";
import { belt } from "./data/belt";


// 整合輸出
export const combined_data_modifier = weapon
  .concat(helmet)
  .concat(spaulders)
  .concat(armor)
  .concat(gloves)
  .concat(shoes)
  // .concat(shield)
  .concat(quiver)
  .concat(necklace)
  .concat(ring)
  .concat(belt);
// 以上為裝備

// 以上為
