export const helmet = [
  {
    page_title_en: "helmet",
    page_title: "頭盔",
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
        value: ["力量+", "發現道具稀有度", "裝備道具品質+", "能力值+", "魔力+"],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["力量+", "符文騎士技能符文CD恢復+%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["弩設置速度+%", "攻擊爆擊傷害+%"],
      },
    ],
    boreal: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: ["力量+", "藥水獲得機率", "裝備道具品質+", "能力值+", "魔力+"],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["力量+", "符文騎士受物理反射傷害+%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["防禦強化技能持續時間+%", "反射傷害+%"],
      },
    ],
    casthor: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: ["智力+", "發現道具稀有度", "裝備道具品質+", "能力值+", "魔力+"],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["智力+", "命中時，完全迴避+%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["吶喊技能符文持續時間+%", "僕從爆擊傷害+%"],
      },
    ],
    aquilla: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: ["敏捷+", "藥水獲得機率", "裝備道具品質+", "能力值+", "魔力+"],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["敏捷+", "符文騎士增益效果+%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["攻擊強化技能持續時間+%", "弩爆擊傷害+%"],
      },
    ],
    vesper: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: ["敏捷+", "發現道具稀有度", "裝備道具品質+", "能力值+", "魔力+"],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: [
          "敏捷+",
          "與圖騰距離400以下時，物理傷害增幅%",
          "與圖騰距離400以下時，元素傷害增幅%",
        ],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["咒文爆擊傷害+%"],
      },
    ],
    sephdar: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: ["智力+", "藥水獲得機率", "裝備道具品質+", "能力值+", "魔力+"],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["智力+", "深淵體同時召喚數量+", "弩同時設置數量+"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["魔力增幅%"],
      },
    ],
    capri: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "力量+",
          "裝備道具獲得機率",
          "裝備道具品質+",
          "能力值+",
          "魔力+",
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
        value: ["強化技能符文效果+%", "爆擊傷害+%"],
      },
    ],
    miraseti: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: ["智力+", "發現道具稀有度", "裝備道具品質+", "能力值+", "魔力+"],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["智力+", "僕從生命力+%", "弩生命力+%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["召喚圖騰時，技能符文效果+%", "所受反射傷害減少"],
      },
    ],

    source: [{
      content: "參考小D(gk224224)所整理的資料",
      url: "https://docs.google.com/spreadsheets/d/18GuwE0arNWEO25HvrgtUrDfIrIqCaOfPqGntQmKN5M0/edit?hl=zh-TW#gid=0",
    },],
  },
];
