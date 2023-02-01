export const shoes = [
  {
    page_title_en: "shoes",
    page_title: "鞋子",
    page_btn_content: [
      {
        name: "時空 (艾莉莎)",
        type: "alyssa",
      },
      {
        name: "大地 (布雷埃爾)",
        type: "boreal",
      },
      {
        name: "光暗 (卡斯托勒)",
        type: "casthor",
      },
      {
        name: "空氣 (阿奎拉)",
        type: "aquilla",
      },
      {
        name: "疾病 (培斯貝勒)",
        type: "vesper",
      },
      {
        name: "繁榮 (賽普塔爾)",
        type: "sephdar",
      },
      {
        name: "火 (卡普立)",
        type: "capri",
      },
      {
        name: "水 (米拉塞堤)",
        type: "miraseti",
      },
    ],
    page_type: "modifier_equipment",
    page_main_content: "",
    page_main_img: "",
    alyssa: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "移動速度上升%",
          "僕從移動速度上升%",
          "裝備道具獲得機率",
          "裝備道具品質+",
          "魔力消耗+%",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["力量+"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: [
          "弩設置速度+%",
          "移動速度不會低於基本數值",
          "移動技能符文冷卻時間恢復速度+%",
        ],
      },
    ],
    boreal: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "移動速度上升%",
          "僕從移動速度上升%",
          "技能符文掉落機率",
          "能力值+",
          "裝備道具品質+",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["力量+", "符文騎士移動速度上升%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["防禦強化技能符文效果+%", "僕從移動速度不會低於一定數值"],
      },
    ],
    casthor: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "移動速度上升%",
          "僕從移動速度上升%",
          "連結符文掉落機率+%",
          "魔力消耗+%",
          "裝備道具品質+",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["智力+", "深淵體移動速度上升%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["攻擊強化技能符文效果+%", "移動速度不會低於基本數值"],
      },
    ],
    aquilla: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "移動速度上升%",
          "僕從移動速度上升%",
          "布爾登場機率+%",
          "能力值+",
          "裝備道具品質+",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["敏捷+", "僕從移動速度上升%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["弩元素抵抗力+", "僕從移動速度不會低於一定數值"],
      },
    ],
    vesper: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "移動速度上升%",
          "僕從移動速度上升%",
          "煉金術材料掉落機率+%",
          "能力值+",
          "魔力消耗+%",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["敏捷+", "生命力達上限時，移動速度上升%", "僕從完全迴避+%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["移動速度不會低於基本數值"],
      },
    ],
    sephdar: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "移動速度上升%",
          "僕從移動速度上升%",
          "符咒掉落機率+%",
          "能力值+",
          "裝備道具品質+",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["智力+", "生命力低於40%時，移動速度上升%", "弩完全迴避+%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["僕從移動速度不會低於一定數值"],
      },
    ],
    capri: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "移動速度上升%",
          "僕從移動速度上升%",
          "煉金術材料掉落機率+%",
          "能力值+",
          "裝備道具品質+",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["力量+", "對移動中的敵人傷害+%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["移動速度不會低於基本數值"],
      },
    ],
    miraseti: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "移動速度上升%",
          "僕從移動速度上升%",
          "符咒掉落機率+%",
          "能力值+",
          "魔力消耗+%",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["智力+", "移動速度增幅%", "能力值+"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["僕從移動速度不會低於一定數值"],
      },
    ],

    source: [{
      content: "參考小D(gk224224)所整理的資料",
      url: "https://docs.google.com/spreadsheets/d/18GuwE0arNWEO25HvrgtUrDfIrIqCaOfPqGntQmKN5M0/edit?hl=zh-TW#gid=0",
    },],
  },
];
