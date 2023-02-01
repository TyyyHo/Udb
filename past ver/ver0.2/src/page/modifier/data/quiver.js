export const quiver = [
  {
    page_title_en: "quiver",
    page_title: "鎧甲",
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
          "廣域範圍+%",
          "廣域傷害+%",
          "弩傷害+%",
          "弩投射體速度+%",
          "投射體速度+%",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["貫穿次數+/投射體傷害+%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["防禦度貫穿+%", "元素貫穿+%", "弩防禦度貫穿+%"],
      },
    ],
    boreal: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "物理傷害+%",
          "元素傷害+%",
          "投射體速度+%",
          "弩傷害+%",
          "傷害+%",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["物理傷害+%", "元素傷害+%", "弩傷害+%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["弩攻擊命中時，弩生命力+", "命中時，生命力+"],
      },
    ],
    casthor: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "攻擊命中度+%",
          "咒文命中度+%",
          "投射體速度+%",
          "弩命中度+%",
          "命中度+%",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["投射體傷害增幅%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: [
          "弩命中度+%",
          "擊退距離+%",
          "投射體命中距離800以上敵時，傷害+%",
        ],
      },
    ],
    aquilla: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "攻擊速度+%",
          "施展速度+%",
          "弩出血發生指數+",
          "投射體速度+%",
          "弩攻擊速度+%",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["對傷害狀態異常敵人造成弩傷害+%", "對傷害狀態異常敵人傷害+%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["投射體速度+%", "弩投射體速度+%"],
      },
    ],
    vesper: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "攻擊爆擊度+%",
          "咒文爆擊度+%",
          "投射體速度+%",
          "弩爆擊度+%",
          "弩爆擊傷害+%",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["對弱化狀態異常敵人造成弩傷害+%", "對弱化狀態異常敵人傷害+%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["失明發生指數+", "中毒發生指數+", "弩失明發生指數+"],
      },
    ],
    sephdar: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "裝備道具品質+",
          "弱化狀態異常發生指數+",
          "投射體速度+%",
          "弩出血發生指數+",
          "弩投射體速度+%",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: [
          "對控制狀態異常敵人造成弩傷害+%",
          "對控制狀態異常敵人傷害+%",
          "敏捷400以上，傷害+%",
        ],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["暈眩發生指數+", "弩束縛發生指數+"],
      },
    ],
    capri: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "防禦度貫穿+%",
          "傷害狀態異常發生指數+",
          "投射體速度+%",
          "弩傷害貫穿+%",
          "爆擊傷害+%",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["攻擊強化技能符文也套用在弩", "傷害+%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["燃燒發生指數+", "損傷恢復發生指數+"],
      },
    ],
    miraseti: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "防禦度貫穿+%",
          "控制狀態異常發生指數+",
          "僕從元素貫穿力+",
          "弩元素貫穿力+",
          "爆擊傷害+%",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["防禦強化技能符文也套用在弩", "生命力達上限時，傷害+%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["惡寒發生指數+", "弩爆擊傷害+%"],
      },
    ],

    source: [{
      content: "參考小D(gk224224)所整理的資料",
      url: "https://docs.google.com/spreadsheets/d/18GuwE0arNWEO25HvrgtUrDfIrIqCaOfPqGntQmKN5M0/edit?hl=zh-TW#gid=0",
    },],
  },
];
