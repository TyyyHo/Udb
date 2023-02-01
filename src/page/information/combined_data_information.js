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
export const combined_data_information = common_questions
  .concat(six_link)
  // 以上為beginner
  .concat(currency)
  .concat(zodiac)
  .concat(chaos_dungeon)
  .concat(character_title)
  .concat(skill_cost)
  .concat(spire_of_barrier)
  // 以上為system
  .concat(rarity)
  .concat(project);
// 以上為mechanics
