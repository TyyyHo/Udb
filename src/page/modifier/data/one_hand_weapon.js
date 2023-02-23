export const one_hand_weapon = [
  {
    page_title_en: "one_hand_weapon",
    page_title: "單手武器",
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
          "廣域範圍+10~20%",
          "廣域傷害+15~30%",
          "弩投射體速度+8~15%",
          "僕從廣域傷害+15~30%",
          "武器範圍11~22",
        ],
      },
      { modifier_type: "prefix", modifier: "前綴", value: ["物理傷害%增幅"] },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: [
          "元素貫穿+%",
          "弩防禦度貫穿+%",
          "防禦度貫穿+%",
          "僕從防禦度貫穿+16~21%",
        ],
      },
    ],
    boreal: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: ["物理傷害+%", "元素傷害+%", "僕從傷害+%", "弩傷害+%", "傷害+%"],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["生命力吸收上限+%", "防護罩吸收上限+%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["命中時，魔力+", "命中時，生命力+", "命中時，防護罩+"],
      },
    ],
    casthor: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "攻擊命中度+%",
          "咒文命中度+%",
          "僕從命中度+%",
          "弩命中度+%",
          "命中度+%",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["冰霜傷害增幅%", "閃電傷害增幅%", "弩召喚數量上限+"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["僕從爆擊度+%", "深淵體爆擊傷害+%"],
      },
    ],
    aquilla: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: ["攻擊速度+%", "施展速度+%", "僕從攻擊速度+%", "僕從施展速度+%", "弩攻擊速度+%"],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["連鎖次數+", "貫穿次數+/投射體傷害+%", "弩傷害增幅%", "深淵體傷害增幅%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["持續傷害+%"],
      },
    ],
    vesper: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: ["攻擊爆擊度+%", "咒文爆擊度+%", "僕從爆擊度+%", "弩爆擊度+%", "爆擊度+%"],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["命中時，額外毒性傷害+%", "毒性傷害增幅%", "火焰傷害增幅%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["弩爆擊度+%", "弩爆擊傷害+%"],
      },
    ],
    sephdar: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: ["裝備道具品質+", "弱化狀態異常發生指數+", "深淵體的出血發生指數+", "弩出血發生指數+", "魔力+%"],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["深淵體召喚數量上限+", "力敏智若200+，傷害增幅%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["使用生命力藥水時，傷害+%", "使用魔力藥水時，傷害+%"],
      },
    ],
    capri: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: ["火焰貫穿+%", "火焰貫穿力+", "僕從傷害貫穿+%", "弩傷害貫穿+%", "爆擊傷害+%"],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["傷害增幅%", "命中時，額外火焰傷害+%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["弩元素抵抗力+", "元素抵抗力+"],
      },
    ],
    miraseti: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: ["冰霜貫穿+%", "冰霜貫穿力+", "僕從元素貫穿力+", "弩元素貫穿力+", "爆擊傷害+%"],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["元素傷害增幅%", "僕從傷害增幅%", "命中時，額外冰霜傷害+%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["僕從元素抵抗力+", "狀態異常迴避率+%"],
      },
    ],

    source: [{
      content: "參考小D(gk224224)所整理的資料",
      url: "https://docs.google.com/spreadsheets/d/18GuwE0arNWEO25HvrgtUrDfIrIqCaOfPqGntQmKN5M0/edit?hl=zh-TW#gid=0",
    },],
  },
];
