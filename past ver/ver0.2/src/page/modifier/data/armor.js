export const armor = [
  {
    page_title_en: "armor",
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
          "防護罩+",
          "混沌抵抗力+",
          "所受廣域傷害減幅%",
          "僕從混沌抵抗力+",
          "弩混沌抵抗力+",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["吶喊技能符文施展速度+%", "強化技能符文等級+"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["所受傷害的%轉換為魔力", "符文騎士束縛免疫"],
      },
    ],
    boreal: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "防禦度+",
          "混沌抵抗力+",
          "所受物理傷害減幅%",
          "僕從防禦度+%",
          "弩防禦度+%",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["防禦度上限傷害減少上限%", "攻擊傷害技能符文等級+"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["所受反射傷害減少", "符文騎士暈眩免疫", "反射傷害+%"],
      },
    ],
    casthor: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "元素抵抗力+",
          "混沌抵抗力+",
          "所受元素傷害減幅%",
          "僕從元素抵抗力+",
          " 弩元素抵抗力+",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["吶喊技能符文等級+", "咒文傷害技能符文等級+"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["所受爆擊傷害減少%", "弩冰凍免疫"],
      },
    ],
    aquilla: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "傷害狀態異常迴避率+%",
          "弱化狀態異常迴避率+%",
          "控制狀態異常迴避率+%",
          "僕從冰凍迴避率+%",
          "弩暈眩迴避率+%",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["混沌抵抗上限+%", "弩技能符文等級+"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["所受爆擊率減少%", "符文騎士冰凍免疫", "弩混沌抵抗力+"],
      },
    ],
    vesper: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "毒性抵抗力+",
          "混沌抵抗力+",
          "所受毒性傷害減幅%",
          "僕從毒性抵抗力+",
          "弩毒性抵抗力+",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["毒性抵抗上限+%", "圖騰技能符文等級+"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["所受爆擊傷害減少%", "弩暈眩免疫"],
      },
    ],
    sephdar: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "生命力+",
          "裝備道具品質+",
          "所受傷害減幅%",
          "僕從生命力+%",
          "弩生命力+%",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["符文騎士技能符文等級+", "深淵體技能符文等級+"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["所受爆擊率減少%", "僕從混沌抵抗力+"],
      },
    ],
    capri: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "火焰抵抗力+",
          "混沌抵抗力+",
          "所受火焰傷害減幅%",
          "僕從火焰抵抗力+",
          "弩火焰抵抗力+",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["火焰抵抗上限+%", "光環及紋章技能符文等級+"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: ["所受爆擊傷害減少%", "僕從生命力+%", "弩生命力+%"],
      },
    ],
    miraseti: [
      {
        modifier_type: "unique",
        modifier: "固定詞綴",
        value: [
          "冰霜抵抗力+",
          "裝備道具品質+",
          "所受冰霜傷害減幅%",
          "僕從冰霜抵抗力+",
          "弩冰霜抵抗力+",
        ],
      },
      {
        modifier_type: "prefix",
        modifier: "前綴",
        value: ["冰霜抵抗上限+%", "僕從技能符文等級+"],
      },
      {
        modifier_type: "suffix",
        modifier: "後綴",
        value: [
          " 所受爆擊率減少%",
          "深淵體死亡時，生命力恢復+",
          "破壞弩時，生命力恢復+",
        ],
      },
    ],

    source: [{
      content: "參考小D(gk224224)所整理的資料",
      url: "https://docs.google.com/spreadsheets/d/18GuwE0arNWEO25HvrgtUrDfIrIqCaOfPqGntQmKN5M0/edit?hl=zh-TW#gid=0",
    },],
  },
];
