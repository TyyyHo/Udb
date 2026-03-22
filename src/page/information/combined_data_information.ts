// beginner
import { common_questions } from "./data/common_questions";
import { six_link } from "./data/six_link";
// import { trivia } from "./data/trivia";

// system
import { currency } from "./data/currency";
import { zodiac } from "./data/zodiac";
import { chaos_dungeon } from "./data/chaos_dungeon";
import { character_title } from "./data/character_title";
import { skill_cost } from "./data/skill_cost";
import { spire_of_barrier } from "./data/spire_of_barrier";

// mechanics
import { rarity } from "./data/rarity";
import { project } from "./data/project";
// import { status } from "./data/status";

// 整合輸出
export const combined_data_information = [
  ...common_questions,
  ...six_link,
  // 以上為beginner
  ...currency,
  ...zodiac,
  ...chaos_dungeon,
  ...character_title,
  ...skill_cost,
  ...spire_of_barrier,
  // 以上為system
  ...rarity,
  ...project,
];
// 以上為mechanics
