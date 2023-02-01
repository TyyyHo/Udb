export const gloves = [
  {
    page_title_en: "gloves",
    page_title: "手套",
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
          "防禦度貫穿+%",
          "火焰貫穿+%",
          "冰霜貫穿+%",
          "閃電貫穿+%",
          "毒性貫穿+%",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["物理傷害+%", "元素傷害+%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["廣域傷害時，爆擊度+%", "擊退機率+%"],
      },
    ],
    boreal: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "命中距離400以下敵人時，物理傷害+%",
          "命中距離400以下敵人時，元素傷害+%",
          "命中距離400以下敵人時，傷害+%",
          "僕從傷害+%",
          "弩傷害+%",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["僕從傷害+%", "弩傷害+%", "反射傷害+"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["對精銳造成傷害+%", "暈眩發生指數+"],
      },
    ],
    casthor: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "對傷害狀態異常敵人傷害+%",
          "對弱化狀態異常敵人傷害+%",
          "對控制狀態異常敵人傷害+%",
          "對傷害狀態異常敵人僕從傷害+%",
          "對傷害狀態異常敵人弩傷害+%",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["火焰傷害+", "冰霜傷害+", "閃電傷害+", "毒性傷害+"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["觸電發生指數+"],
      },
    ],
    aquilla: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "燃燒傷害增幅%",
          "中毒傷害增幅%",
          "出血傷害增幅%",
          "持續傷害增幅%",
          "裝備道具品質+",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["僕從傷害+%", "弩傷害+%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["攻擊速度增幅%", "施展速度增幅%"],
      },
    ],
    vesper: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "與圖騰距離400以下時，物理傷害增幅%",
          "與圖騰距離400以下時，元素傷害增幅%",
          "爆擊傷害+%",
          "僕從爆擊傷害+%",
          "弩爆擊傷害+%",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["物理傷害+%", "元素傷害+%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["持續傷害+%", "中毒發生指數+"],
      },
    ],
    sephdar: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "力敏智達150時，傷害+%",
          "弩防禦度貫穿+%",
          "弩元素貫穿+%",
          "僕從防禦度貫穿+%",
          "僕從元素貫穿+%",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["物理傷害+"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["損傷恢復發生指數+", "惡寒發生指數+"],
      },
    ],
    capri: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "半徑400內有敵人時，爆擊傷害+%",
          "半徑400內沒有敵人時，爆擊傷害+%",
          "處生命上限且召喚僕從時僕從傷害+%",
          "僕從爆擊傷害+%",
          "弩爆擊傷害+%",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["火焰傷害+", "命中時，生命力+", "僕從命中度+%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["弩傷害增幅%", "燃燒發生指數+"],
      },
    ],
    miraseti: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "物理傷害+%",
          "火焰傷害+%",
          "冰霜傷害+%",
          "閃電傷害+%",
          "毒性傷害+%",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["冰霜傷害+", "命中時，魔力+", "弩命中度+%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["僕從傷害增幅%", "冰凍發生指數+"],
      },
    ],

    source: [{
      content: "參考小D(gk224224)所整理的資料",
      url: "https://docs.google.com/spreadsheets/d/18GuwE0arNWEO25HvrgtUrDfIrIqCaOfPqGntQmKN5M0/edit?hl=zh-TW#gid=0",
    },],
  },
];
