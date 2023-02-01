export const spaulders = [
  {
    page_title_en: "spaulders",
    page_title: "肩甲",
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
          "使用生命藥水時，立即恢復生命+",
          "擊殺時，生命力+",
          "格擋恢復速度+%",
          "裝備道具品質+",
          "強化技能符文冷卻時間恢復速度+%",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: [
          "受精銳攻擊時，防禦度+%",
          "受精銳攻擊時，迴避度+%",
          "受精銳攻擊時，每秒防護罩復甦+",
        ],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["受擊時，恢復速度+%", "命中符文騎士時，生命力+"],
      },
    ],
    boreal: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "弩攻擊命中時，弩生命力+",
          "格擋熟練度+",
          "僕從格擋熟練度+",
          "僕從每秒生命力復甦+",
          "每秒生命力復甦+",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["生命力+%", "僕從生命力+%", "弩生命力+%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["每秒生命力復甦+%", "命中符文騎士時，生命力+"],
      },
    ],
    casthor: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "完全迴避攻擊+%",
          "完全迴避咒文+%",
          "深淵體完全迴避攻擊+%",
          "深淵體完全迴避咒文+%",
          "弩完全迴避攻擊+%",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["所受傷害的%由弩代為承受", "束縛迴避率+%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["僕從元素抵抗力+", "弩元素抵抗力+"],
      },
    ],
    aquilla: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "元素抵抗力+",
          "混沌抵抗力+",
          "圖騰混沌抵抗力+",
          "僕從混沌抵抗力+",
          "弩混沌抵抗力+",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["所受傷害的%由符文騎士代為承受", "冰凍迴避率+%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["僕從防禦度+%", "弩防禦度+%"],
      },
    ],
    vesper: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "生命力+",
          "生命力+%",
          "圖騰生命力+%",
          "僕從生命力+%",
          "弩生命力+%",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: [
          "與圖騰距離400以下時，防禦度增幅%",
          "與圖騰距離400以下時，迴避度增幅%",
          "與圖騰距離400以下時，防護罩增幅%",
        ],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["破壞弩時，生命力恢復+"],
      },
    ],
    sephdar: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: ["防禦度+", "迴避度+", "防護罩+", "僕從防禦度+%", "弩防禦度+%"],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["暈眩迴避率+%", "火冰電毒抵抗若皆100+，混沌抵抗力+"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["深淵體死亡時，生命力恢復+"],
      },
    ],
    capri: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "裝備道具品質+",
          "每秒生命力復甦+%",
          "圖騰元素抵抗力+",
          "僕從元素抵抗力+",
          "弩元素抵抗力+",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["損傷恢復迴避率+%", "僕從命中度+%", "弩命中度+%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["傷害+%", "弩傷害+%"],
      },
    ],
    miraseti: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "魔力+%",
          "使用魔力藥水時，立即恢復魔力+",
          "弩所受傷害減幅%",
          "弩所受物理傷害減幅%",
          "弩所受元素傷害減幅%",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["惡寒迴避率+%", "圖騰完全迴避+%"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["元素傷害+%", "僕從傷害+%"],
      },
    ],

    source: [{
      content: "參考小D(gk224224)所整理的資料",
      url: "https://docs.google.com/spreadsheets/d/18GuwE0arNWEO25HvrgtUrDfIrIqCaOfPqGntQmKN5M0/edit?hl=zh-TW#gid=0",
    },],
  },
];
