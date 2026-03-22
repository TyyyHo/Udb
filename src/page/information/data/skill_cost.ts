export const skill_cost = [
  {
    page_title_en: "skill_cost",
    page_title: "資源消耗增幅",
    page_type:"information_system",
    page_main_content:
      "惡月十三中，部分技能的消耗顯示為百分比形式，代表啟用該技能時，其他技能的消耗都會提升該百分比；多個類似技能是以累乘的方式進行疊加。",
    page_main_img: "",
    sub_content: [
      {
        sub_content_title: "消耗增幅",
        page_sub_content: "啟用技能後，魔力值旁會顯示目前的消耗增幅比例。",
        img: [
          {
            url: "/img/information/資源消耗增幅/消耗提升提示.png",
            description: "幻影斧頭啟用時會提升魔力消耗20%",
          },
        ],
      },
      {
        sub_content_title: "召喚時付費",
        page_sub_content:
          "弩及僕從技能中所提示的召喚時付費也是同樣的概念，例如：召喚每個深淵體都會使消耗*1.10，且每個僕從都視為獨立來源(消耗累乘疊加)。",
        img: [
          {
            url: "/img/information/資源消耗增幅/召喚物+資源消耗減幅.png",
            description:
              "雖然僕從可串聯連結符文-消耗資源減幅，但僅減少施法召喚時的消耗，不影響資源消耗增幅。",
          },
        ],
      },
    ],
    source: [],
  },
];
