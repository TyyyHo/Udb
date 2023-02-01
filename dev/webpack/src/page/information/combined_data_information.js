import { common_questions } from "./data/common_questions";
import { zodiac } from "./data/zodiac";
import { trivia } from "./data/trivia";
import { six_link } from "./data/six_link";
import { chaos_dungeon } from "./data/chaos_dungeon";
import { character_title } from "./data/character_title";
import { skill_cost } from "./data/skill_cost";
import { currency } from "./data/currency";
import { spire_of_barrier } from "./data/spire_of_barrier";
import { status } from "./data/status";
import { rarity } from "./data/rarity";
import { project } from "./data/project";

export const combined_data_information = common_questions
  .concat(zodiac)
  .concat(trivia)
  .concat(six_link)
  .concat(chaos_dungeon)
  .concat(character_title)
  .concat(skill_cost)
  .concat(currency)
  .concat(spire_of_barrier)
  .concat(status)
  .concat(rarity)
  .concat(project)
