// item
import { essence } from "./data/essence";
import { essence_authority } from "./data/essence_authority";
import { essence_rune } from "./data/essence_rune";

// equipment

// 整合輸出
export const combined_data_item = essence
  .concat(essence_authority)
  .concat(essence_rune);
// 以上為道具

// 以上為裝備
