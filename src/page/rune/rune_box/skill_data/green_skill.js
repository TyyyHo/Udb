export const green_skill = [
  {
    rune_name_en: "spread_shot",
    rune_name_ch: "擴散射擊",
    rune_content: "廣範圍發射多個箭矢，對敵人造成物理傷害",
    rune_img_url: "/img/rune/skill/green/擴散射擊.jpg",
    link_url: "/rune/spread_shot",
    rune_tag: ["攻擊", "打擊", "物理", "投射體", "弓", "擴散射擊"],
    rune_limit: ["無連結限制", "可使用弓"],
    rune_rank_effect: {
      magic: "投射體傷害+50%",
      rare: "投射體傷害+50%<br>投射體速度+15%<br>投射體數量+2",
      legend: "投射體傷害+150%<br>投射體速度+30%<br>投射體數量+4",
    },
    rune_lv30: {
      consume: "14.6",
      value: "物理傷害+340<br>物理傷害550%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "icy_arrow",
    rune_name_ch: "結冰箭矢",
    rune_content:
      "發射結冰箭矢對敵人造成傷害，在箭矢的移動路徑上產生寒霜球，額外爆炸",
    rune_img_url: "/img/rune/skill/green/結冰箭矢.jpg",
    link_url: "/rune/icy_arrow",
    rune_tag: ["攻擊", "打擊", "冰霜", "投射體", "弓", "結冰箭矢"],
    rune_limit: ["無法多重發射，無法分離、無法連鎖", "可使用弓"],
    rune_rank_effect: {
      magic: "惡寒機率+5%<br>廣域傷害增幅10%",
      rare: "惡寒機率+10%<br>廣域範圍+25<br>廣域傷害增幅20%",
      legend:
        "惡寒機率+15%<br>廣域範圍+25<br>冰凍發生指數+10<br>廣域傷害增幅30%",
    },
    rune_lv30: {
      consume: "19.5",
      value: "冰霜傷害+321<br>結冰箭矢冰霜傷害269%<br>寒霜球冰霜傷害269%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "rapid_shot",
    rune_name_ch: "連續射擊",
    rune_content: "朝直線發射多個箭矢，對敵人造成物理傷害",
    rune_img_url: "/img/rune/skill/green/連續射擊.jpg",
    link_url: "/rune/rapid_shot",
    rune_tag: ["攻擊", "打擊", "物理", "投射體", "弓", "連續射擊"],
    rune_limit: ["無法並列發射", "可使用弓"],
    rune_rank_effect: {
      magic: "投射體傷害+50%",
      rare: "投射體傷害+100%<br>投射體數量+1",
      legend: "投射體傷害+150%<br>投射體數量+2<br>打擊傷害倍率+10%",
    },
    rune_lv30: {
      consume: "18.5",
      value: "物理傷害+320<br>物理傷害166%",
    },
    sub_content: [
      {
        sub_content_title: "重複命中",
        rune_sub_content:
          "連續射擊重複命中同一目標時，傷害減幅15%為每隻箭矢遞減。",
        img: [
          {
            url: "/img/rune/skill/green/img/重複命中傷害倍率.png",
            description: "增加箭矢的效率",
          },
        ],
      },
    ],
    source: [],
  },
  {
    rune_name_en: "poison_cloud",
    rune_name_ch: "毒雲",
    rune_content: "使施法者周圍產生毒雲，對敵人造成毒性傷害",
    rune_img_url: "/img/rune/skill/green/毒雲.jpg",
    link_url: "/rune/poison_cloud",
    rune_tag: ["咒文", "近距", "廣域", "打擊", "毒性", "毒雲"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic:
        "中毒傷害15%增幅<br>對處於中毒狀態的敵人傷害+50%<br>對處於中毒狀態的敵人傷害倍率+30%",
      rare: "中毒機率+5%<br>中毒傷害30%增幅<br>對處於中毒狀態的敵人傷害+100%<br>對處於中毒狀態的敵人傷害倍率+50%",
      legend:
        "中毒機率+10%<br>中毒傷害45%增幅<br>對處於中毒狀態的敵人傷害+150%<br>對處於中毒狀態的敵人傷害倍率+100%",
    },
    rune_lv30: {
      consume: "16",
      value: "毒性傷害+1156<br>毒性傷害351%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "piercing_arrow",
    rune_name_ch: "穿透箭矢",
    rune_content: "發射箭矢，貫穿所有敵人並造成傷害",
    rune_img_url: "/img/rune/skill/green/穿透箭矢.jpg",
    link_url: "/rune/piercing_arrow",
    rune_tag: ["攻擊", "打擊", "物理", "投射體", "弓", "穿透箭矢"],
    rune_limit: ["無法分離、無法連鎖", "可使用弓"],
    rune_rank_effect: {
      magic: "出血機率+10%<br>出血傷害+50%",
      rare: "出血機率+15%<br>出血傷害+100%<br>對處於出血狀態的敵人傷害15%增幅",
      legend:
        "出血機率+20%<br>出血傷害+150%<br>對處於出血狀態的敵人傷害30%增幅",
    },
    rune_lv30: {
      consume: "16.1",
      value: "物理傷害+1370<br>物理傷害266%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "rain_of_arrows",
    rune_name_ch: "箭雨",
    rune_content:
      "在一定時間內降下箭雨，對敵人造成傷害。箭雨的維持時間內將受到攻擊速度的影響。",
    rune_img_url: "/img/rune/skill/green/箭雨.jpg",
    link_url: "/rune/rain_of_arrows",
    rune_tag: ["攻擊", "打擊", "物理", "投射體", "弓", "箭雨"],
    rune_limit: ["無連結限制", "無法並列發射，無法分離，無法連鎖"],
    rune_rank_effect: {
      magic: "投射體數量+1",
      rare: "投射體數量+2<br>爆炸範圍+10",
      legend: "投射體數量+3<br>爆炸範圍+30",
    },
    rune_lv30: {
      consume: "87.5",
      value: "物理傷害+198<br>物理傷害280%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "burn_arrow",
    rune_name_ch: "燃燒箭矢",
    rune_content: "發射火焰箭矢，使敵人燃燒並造成傷害",
    rune_img_url: "/img/rune/skill/green/燃燒箭矢.jpg",
    link_url: "/rune/burn_arrow",
    rune_tag: ["攻擊", "打擊", "火焰", "投射體", "弓", "燃燒箭矢"],
    rune_limit: ["無法分離", "可使用弓"],
    rune_rank_effect: {
      magic:
        "燃燒機率+10%<br>燃燒傷害20%增幅<br>對處於燃燒狀態的敵人傷害+50%<br>高溫效果+50%",
      rare: "燃燒機率+15%<br>燃燒傷害30%增幅<br>對處於燃燒狀態的敵人傷害+100%<br>高溫效果+75%",
      legend:
        "燃燒機率+20%<br>燃燒傷害40%增幅<br>對處於燃燒狀態的敵人傷害+150%<br>高溫效果+100%",
    },
    rune_lv30: {
      consume: "15.6",
      value: "火焰傷害+1572<br>火焰傷害299%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "cross_lightning_arrow",
    rune_name_ch: "十字閃電箭矢",
    rune_content: "發射會以十字狀爆炸的箭矢，對敵人造成傷害",
    rune_img_url: "/img/rune/skill/green/十字閃電箭矢.jpg",
    link_url: "/rune/cross_lightning_arrow",
    rune_tag: ["攻擊", "廣域", "打擊", "閃電", "投射體", "弓", "十字閃電箭矢"],
    rune_limit: ["無法分離，無法連鎖", "可使用弓"],
    rune_rank_effect: {
      magic: "廣域範圍+30<br>攻擊暴擊度+40%",
      rare: "廣域範圍+50<br>攻擊暴擊度+80%<br>對處於觸電狀態的敵人傷害+50%",
      legend:
        "廣域範圍+80<br>攻擊暴擊度+120%<br></br>對處於觸電狀態的敵人傷害+100%",
    },
    rune_lv30: {
      consume: "15.6",
      value: "閃電傷害+273<br>閃電傷害450%<br>暴擊噴發閃電傷害504%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "dagger_throw",
    rune_name_ch: "投擲暗器",
    rune_content:
      "投擲暗器，對敵人造成傷害，命中時，將彈向周圍的敵人，造成額外傷害",
    rune_img_url: "/img/rune/skill/green/投擲暗器.jpg",
    link_url: "/rune/dagger_throw",
    rune_tag: ["攻擊", "打擊", "毒性", "投射體", "投擲暗器"],
    rune_limit: ["無法並列發射", "可使用短劍"],
    rune_rank_effect: {
      magic: "毒性傷害10%增幅<br>對處於中毒狀態的敵人傷害+50%",
      rare: "毒性傷害20%增幅<br>對處於中毒狀態的敵人傷害+100%<br>毒性貫穿+10%",
      legend:
        "毒性傷害30%增幅<br>對處於中毒狀態的敵人傷害+150%<br>毒性貫穿+25%<br>連鎖次數+1",
    },
    rune_lv30: {
      consume: "16",
      value: "毒性傷害+1530<br>毒性傷害253%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "roll",
    rune_name_ch: "翻滾",
    rune_content: "向前方翻滾並移動",
    rune_img_url: "/img/rune/skill/green/翻滾.jpg",
    link_url: "/rune/roll",
    rune_tag: ["攻擊", "持續時間", "移動", "翻滾"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "敏捷效果+30%",
      rare: "敏捷效果+60%",
      legend: "敏捷效果+100%",
    },
    rune_lv30: {
      consume: "11.7",
      value: "迴避度+58.2%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "cross_slash",
    rune_name_ch: "交叉斬擊",
    rune_content: "武器交叉斬擊，對前方多數敵人造成兩次傷害",
    rune_img_url: "/img/rune/skill/green/交叉斬擊.jpg",
    link_url: "/rune/cross_slash",
    rune_tag: ["攻擊", "近距", "廣域", "打擊", "物理", "交叉斬擊"],
    rune_limit: ["無連結限制", "可使用短劍"],
    rune_rank_effect: {
      magic: "廣域傷害+50%<br>廣域範圍+50",
      rare: "廣域傷害+100%<br>廣域範圍+100<br>打擊傷害倍率+25%<br>打擊範圍數量+2",
      legend:
        "廣域傷害+150%<br>廣域範圍+150<br>打擊傷害倍率+50%<br>打擊範圍數量+2",
    },
    rune_lv30: {
      consume: "13.1",
      value: "物理傷害+298<br>物理傷害296%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "illusion_strike",
    rune_name_ch: "幻影一擊",
    rune_content:
      "向前方移動，對敵人造成傷害，發生打擊及暴擊時，以一定機率引發異常狀態",
    rune_img_url: "/img/rune/skill/green/幻影一擊.jpg",
    link_url: "/rune/illusion_strike",
    rune_tag: ["攻擊", "近距", "廣域", "打擊", "物理", "移動", "幻影一擊"],
    rune_limit: ["無連結限制", "可使用短劍"],
    rune_rank_effect: {
      magic: "出血機率+5%<br>對處於出血狀態的敵人傷害+50%",
      rare: "出血機率+15%<br>對處於出血狀態的敵人傷害+100%<br>廣域範圍+50",
      legend:
        "出血機率+25%<br>對處於出血狀態的敵人傷害+150%<br>廣域範圍+100<br>使用次數上限+1",
    },
    rune_lv30: {
      consume: "22.4",
      value: "物理傷害+345<br>物理傷害493%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "piercing_sentry",
    rune_name_ch: "穿透之弩",
    rune_content: "召喚貫穿敵人的箭矢以及造成物理傷害的弩，召喚時須維護費用",
    rune_img_url: "/img/rune/skill/green/穿透之弩.jpg",
    link_url: "/rune/piercing_sentry",
    rune_tag: ["攻擊", "弩", "穿透之弩"],
    rune_limit: ["無法分離，無法連鎖", "可使用所有武器"],
    rune_rank_effect: {
      magic: "弩生命力+20%<br>對處於傷害狀態異常的敵人造成弩傷害+100%",
      rare: "弩生命力+40%<br>對處於傷害狀態異常的敵人造成弩傷害+150%<br>弩傷害15%增幅",
      legend:
        "弩生命力+40%<br>對處於傷害狀態異常的敵人造成弩傷害+200%<br>弩同時設置數量+1<br>弩傷害30%增幅",
    },
    rune_lv30: {
      consume: "44",
      value: "弩等級30<br>物理傷害140%<br>弩生命力+37.5%<br>弩暴擊度+13",
    },
    sub_content: [
      {
        sub_content_title: "備註",
        rune_sub_content: "穿透之弩具有打擊、物理、投射體特性",
        img: [],
      },
    ],
    source: [],
  },
  {
    rune_name_en: "fan_blade_sentry",
    rune_name_ch: "扇刃之弩",
    rune_content:
      "召喚多個廣泛發射的箭矢以及造成物理傷害的弩，召喚時須維護費用",
    rune_img_url: "/img/rune/skill/green/扇刃之弩.jpg",
    link_url: "/rune/fan_blade_sentry",
    rune_tag: ["攻擊", "弩", "扇刃之弩"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "弩生命力+20%<br>弩投射體數量+2",
      rare: "弩生命力+40%<br>弩投射體數量+2<br>弩傷害15%增幅",
      legend:
        "弩生命力+40%<br>弩投射體數量+4<br>弩同時設置數量+1<br>弩傷害30%增幅",
    },
    rune_lv30: {
      consume: "44",
      value: "弩等級30<br>物理傷害140%<br>弩生命力+37.5%<br>弩暴擊度+13",
    },
    sub_content: [
      {
        sub_content_title: "備註",
        rune_sub_content: "扇刃之弩具有打擊、物理、投射體特性",
        img: [],
      },
    ],
    source: [],
  },
  {
    rune_name_en: "eletric_sentry",
    rune_name_ch: "電擊之弩",
    rune_content: "召喚出命中敵人時，連鎖發射出閃電箭矢的弩，召喚時須維護費用",
    rune_img_url: "/img/rune/skill/green/電擊之弩.jpg",
    link_url: "/rune/eletric_sentry",
    rune_tag: ["攻擊", "弩", "電擊之弩"],
    rune_limit: ["無法分離", "可使用所有武器"],
    rune_rank_effect: {
      magic: "弩生命力+20%<br>對處於弱化狀態異常的敵人造成弩傷害+100%",
      rare: "弩生命力+40%<br>對處於弱化狀態異常的敵人造成弩傷害+150%<br>弩傷害15%增幅",
      legend:
        "弩生命力+40%<br>對處於弱化狀態異常的敵人造成弩傷害+200%<br>弩同時設置數量+1<br>弩傷害30%增幅",
    },
    rune_lv30: {
      consume: "44",
      value: "弩等級30<br>閃電傷害140%<br>弩生命力+37.5%<br>弩暴擊度+13",
    },
    sub_content: [
      {
        sub_content_title: "備註",
        rune_sub_content: "電擊之弩具有打擊、閃電、投射體特性",
        img: [],
      },
    ],
    source: [],
  },
  {
    rune_name_en: "venom_fang",
    rune_name_ch: "猛毒尖牙",
    rune_content:
      "向前方揮擊短劍，造成範圍傷害，每次對敵人造成傷害時，範圍都會增加",
    rune_img_url: "/img/rune/skill/green/猛毒尖牙.jpg",
    link_url: "/rune/venom_fang",
    rune_tag: ["攻擊", "近距", "廣域", "打擊", "毒性", "猛毒尖牙"],
    rune_limit: ["無連結限制", "可使用短劍"],
    rune_rank_effect: {
      magic: "中毒機率+10%<br>尖牙效果+30%<br>對處於中毒狀態的敵人傷害+20%",
      rare: "中毒機率+15%<br>尖牙效果+60%<br>對處於中毒狀態的敵人傷害+60%",
      legend:
        "中毒機率+20%<br>尖牙效果+100%<br>對處於中毒狀態的敵人傷害+110%<br>對處於中毒狀態的敵人傷害10%增幅",
    },
    rune_lv30: {
      consume: "13.7",
      value: "毒性傷害+1533<br>毒性傷害305%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "shadow_forest",
    rune_name_ch: "影之森",
    rune_content: "產生對前方敵人造成持續傷害的人造空間",
    rune_img_url: "/img/rune/skill/green/影之森.jpg",
    link_url: "/rune/shadow_forest",
    rune_tag: ["咒文", "廣域", "打擊", "物理", "影之森"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "技能符文效果+8%",
      rare: "技能符文效果+15%<br>廣域傷害+50%<br>廣域範圍+50",
      legend:
        "技能符文效果+23%<br>廣域傷害+100%<br>廣域範圍+50<br>使用次數上限+1",
    },
    rune_lv30: {
      consume: "53.6",
      value: "物理傷害+236<br>物理傷害167%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "blade_of_death",
    rune_name_ch: "死亡劍刃",
    rune_content: "發射後，將投擲能回歸至施展者的短劍",
    rune_img_url: "/img/rune/skill/green/死亡劍刃.jpg",
    link_url: "/rune/blade_of_death",
    rune_tag: ["咒文", "打擊", "物理", "投射體", "死亡劍刃"],
    rune_limit: ["無法並列發射，無法分離，無法連鎖", "可使用所有武器"],
    rune_rank_effect: {
      magic: "出血機率+10%<br>出血傷害10%增幅",
      rare: "出血機率+20%<br>出血傷害20%增幅<br>對處於出血狀態的敵人造成傷害+100%",
      legend:
        "出血機率+30%<br>出血傷害30%增幅<br>對處於出血狀態的敵人造成傷害+200%<br>投射體速度+20%",
    },
    rune_lv30: {
      consume: "15.6",
      value: "物理傷害+340<br>投擲時物理傷害324%<br>回歸時物理傷害342%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "bombardment_arrow",
    rune_name_ch: "爆擊箭矢",
    rune_content: "向前方發射廣範圍爆擊的箭矢",
    rune_img_url: "/img/rune/skill/green/爆擊箭矢.jpg",
    link_url: "/rune/bombardment_arrow",
    rune_tag: ["攻擊", "廣域", "打擊", "物理", "投射體", "弓", "爆擊箭矢"],
    rune_limit: ["無法並列發射，無法分離，無法連鎖", "可使用弓"],
    rune_rank_effect: {
      magic: "廣域範圍+10",
      rare: "廣域範圍+20<br>廣域傷害+50%",
      legend: "廣域範圍+30<br>廣域傷害+100%<br>投射體數量+2",
    },
    rune_lv30: {
      consume: "18.5",
      value: "物理傷害+211<br>箭矢傷害150%<br>範圍傷害161%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "venomous_strength",
    rune_name_ch: "猛毒之力",
    rune_content:
      "刺擊前方，造成傷害。攻擊次數越多，攻擊速度越快，且毒性傷害增加",
    rune_img_url: "/img/rune/skill/green/猛毒之力.jpg",
    link_url: "/rune/venomous_strength",
    rune_tag: ["攻擊", "近距", "武器範圍", "打擊", "物理", "猛毒之力"],
    rune_limit: ["無連結限制", "可使用短劍"],
    rune_rank_effect: {
      magic: "猛毒效果+30%<br>中毒發生指數+15<br>打擊傷害倍率+30%",
      rare: "猛毒效果+60%<br>中毒發生指數+30<br>打擊傷害倍率+60%",
      legend: "猛毒效果+100%<br>中毒發生指數+50<br>打擊傷害倍率+120%",
    },
    rune_lv30: {
      consume: "15.6",
      value: "毒性傷害+211<br>毒性傷害604%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "unleash_lightning_shot",
    rune_name_ch: "閃電噴發射擊",
    rune_content:
      "發射能產生觸電的箭矢，命中處於觸電狀態的目標時，將噴發出多條閃電",
    rune_img_url: "/img/rune/skill/green/閃電噴發射擊.jpg",
    link_url: "/rune/unleash_lightning_shot",
    rune_tag: ["攻擊", "打擊", "閃電", "投射體", "弓", "閃電噴發射擊"],
    rune_limit: ["無法並列發射", "可使用弓"],
    rune_rank_effect: {
      magic: "觸電機率+10%",
      rare: "觸電機率+15%<br>對處於觸電狀態的敵人暴擊傷害+10%",
      legend: "觸電機率+20%<br>對處於觸電狀態的敵人暴擊傷害+20%",
    },
    rune_lv30: {
      consume: "15.6",
      value: "閃電傷害+248<br>閃電傷害335%<br>閃電粒子傷害540%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "frost_sentry",
    rune_name_ch: "寒霜弩",
    rune_content: "召喚出命中敵人後，發射出爆炸寒霜箭矢的弩，召喚時須維護費用",
    rune_img_url: "/img/rune/skill/green/寒霜弩.jpg",
    link_url: "/rune/frost_sentry",
    rune_tag: ["攻擊", "弩", "寒霜弩"],
    rune_limit: ["無法分離，無法連鎖", "可使用所有武器"],
    rune_rank_effect: {
      magic: "弩生命力+20%<br>對處於弱化狀態異常的敵人造成弩傷害+100%",
      rare: "弩生命力+40%<br>對處於弱化狀態異常的敵人造成弩傷害+150%<br>弩傷害15%增幅",
      legend:
        "弩生命力+40%<br>對處於弱化狀態異常的敵人造成弩傷害+200%<br>弩同時設置數量+1<br>弩傷害30%增幅",
    },
    rune_lv30: {
      consume: "44",
      value: "弩等級30<br>冰霜傷害140%<br>弩生命力+37.5%<br>弩暴擊度+13",
    },
    sub_content: [
      {
        sub_content_title: "備註",
        rune_sub_content: "寒霜之弩具有打擊、廣域、投射體特性",
        img: [],
      },
    ],
    source: [],
  },
  {
    rune_name_en: "vital_strike",
    rune_name_ch: "要害一擊",
    rune_content: "在持續時間內，暴擊度及暴擊傷害增加",
    rune_img_url: "/img/rune/skill/green/要害一擊.jpg",
    link_url: "/rune/vital_strike",
    rune_tag: ["咒文", "攻擊強化", "持續時間", "合成限定", "要害一擊"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "強化技能符文效果+5%",
      rare: "強化技能符文效果+10%",
      legend: "強化技能符文效果+15%",
    },
    rune_lv30: {
      consume: "39.2",
      value: "暴擊度+187%<br>暴擊傷害+93.5%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "marksman",
    rune_name_ch: "神射手",
    rune_content: "在持續時間內，增加投射體傷害及貫穿次數",
    rune_img_url: "/img/rune/skill/green/神射手.jpg",
    link_url: "/rune/marksman",
    rune_tag: ["咒文", "攻擊強化", "持續時間", "神射手"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "強化技能符文效果+5%",
      rare: "強化技能符文效果+10%",
      legend: "強化技能符文效果+15%",
    },
    rune_lv30: {
      consume: "39.2",
      value: "命中度+49%<br>投射體傷害29.5%增幅",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "illusion_arrow",
    rune_name_ch: "幻影箭矢",
    rune_content: "以弓技能達到疊加數時，將以一定機率自動發射出誘導箭矢",
    rune_img_url: "/img/rune/skill/green/幻影箭矢.jpg",
    link_url: "/rune/illusion_arrow",
    rune_tag: [
      "攻擊",
      "打擊",
      "物理",
      "投射體",
      "持續時間",
      "切換",
      "傷害切換",
      "幻影箭矢",
    ],
    rune_limit: ["無法並列發射，無法分離，無法連鎖", "可使用弓"],
    rune_rank_effect: {
      magic: "投射體傷害+20%",
      rare: "投射體傷害+20%<br>投射體數量+1",
      legend: "投射體傷害+65%<br>投射體數量+2",
    },
    rune_lv30: {
      consume: "15%",
      value: "物理傷害+248<br>物理傷害295%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "poison_explosion",
    rune_name_ch: "毒性爆炸",
    rune_content: "以引發中毒達到疊加數時，將以一定機率在周圍引發毒性爆炸",
    rune_img_url: "/img/rune/skill/green/毒性爆炸.jpg",
    link_url: "/rune/poison_explosion",
    rune_tag: [
      "攻擊",
      "廣域",
      "打擊",
      "毒性",
      "持續時間",
      "切換",
      "傷害切換",
      "毒性爆炸",
    ],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "廣域範圍+25",
      rare: "廣域範圍+50<br>對處於中毒狀態的敵人傷害+50%",
      legend: "廣域範圍+80<br>對處於中毒狀態的敵人傷害+100%",
    },
    rune_lv30: {
      consume: "15%",
      value: "毒性傷害+170<br>毒性傷害216%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "improved_senses",
    rune_name_ch: "提高感覺",
    rune_content: "使用技能時，根據配戴短劍型態，獲得暫時強化效果",
    rune_img_url: "/img/rune/skill/green/提高感覺.jpg",
    link_url: "/rune/improved_senses",
    rune_tag: ["咒文", "防禦強化", "持續時間", "提高感覺"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "強化技能符文效果+5%",
      rare: "強化技能符文效果+10%",
      legend: "強化技能符文效果+15%",
    },
    rune_lv30: {
      consume: "39.2",
      value: "裝備格檔熟練度+64<br>迴避度78%增幅",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "freeze_arrow",
    rune_name_ch: "冷卻箭矢",
    rune_content:
      "連續發射等卻敵人的分離箭矢，造成傷害，目標冰凍時，額外引發冰霜爆炸",
    rune_img_url: "/img/rune/skill/green/冷卻箭矢.jpg",
    link_url: "/rune/freeze_arrow",
    rune_tag: ["攻擊", "廣域", "打擊", "冰霜", "投射體", "弓", "冷卻箭矢"],
    rune_limit: ["無法並列發射，無法分離", "可使用弓"],
    rune_rank_effect: {
      magic: "廣域傷害+50%<br>打擊倍率+10%",
      rare: "廣域傷害+100%<br>冰霜貫穿+10%<br>投射體數量+1<br>打擊倍率+15%",
      legend: "廣域傷害+150%<br>冰霜貫穿+20%<br>投射體數量+2<br>打擊倍率+30%",
    },
    rune_lv30: {
      consume: "18.5",
      value: "冰霜傷害+1199<br>箭矢冰霜傷害90%<br>爆炸冰霜傷害171%",
    },
    sub_content: [
      {
        sub_content_title: "重複命中",
        rune_sub_content:
          "冷卻箭矢重複命中同一目標時，傷害減幅15%為每隻箭矢遞減。",
        img: [
          {
            url: "/img/rune/skill/green/img/重複命中傷害倍率.png",
            description: "增加箭矢的效率",
          },
        ],
      },
    ],
    source: [],
  },
  {
    rune_name_en: "shock_sentry",
    rune_name_ch: "衝擊波之弩",
    rune_content: "召喚出小範圍內發射箭矢並造成劇烈傷害的弩，召喚時須維護費用",
    rune_img_url: "/img/rune/skill/green/衝擊波之弩.jpg",
    link_url: "/rune/frost_sentry",
    rune_tag: ["攻擊", "弩", "合成限定", "衝擊波之弩"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "弩生命力+20%<br>弩與敵人的距離少於400cm以下時，傷害+100%",
      rare: "弩生命力+40%<br>弩與敵人的距離少於400cm以下時，傷害+150%<br>弩傷害15%增幅",
      legend:
        "弩生命力+40%<br>弩與敵人的距離少於400cm以下時，傷害+200%<br>弩同時設置數量+1<br>弩傷害30%增幅",
    },
    rune_lv30: {
      consume: "待補",
      value: "待補",
    },
    sub_content: [
      {
        sub_content_title: "備註",
        rune_sub_content: "衝擊波之弩具有打擊、物理、投射體特性",
        img: [],
      },
    ],
    source: [],
  },
  {
    rune_name_en: "penetrating_slash",
    rune_name_ch: "貫穿斬擊",
    rune_content: "向前方移動，對路徑上的敵人造成物理傷害",
    rune_img_url: "/img/rune/skill/green/貫穿斬擊.jpg",
    link_url: "/rune/penetrating_slash",
    rune_tag: [
      "攻擊",
      "打擊",
      "物理",
      "持續時間",
      "移動",
      "合成限定",
      "貫穿斬擊",
    ],
    rune_limit: ["無連結限制", "可使用短劍、劍、斧頭、鈍器及手杖"],
    rune_rank_effect: {
      magic: "忘卻效果+100%",
      rare: "忘卻效果+200%<br>使用次數上限+1<br>傷害15%增幅",
      legend: "忘卻效果+200%<br>使用次數上限+2<br>傷害30%增幅",
    },
    rune_lv30: {
      consume: "待補",
      value: "待補",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "poison_rain_of_arrow",
    rune_name_ch: "毒性箭雨",
    rune_content: "朝空中發射箭矢，並對敵人造成傷害",
    rune_img_url: "/img/rune/skill/green/毒性箭雨.jpg",
    link_url: "/rune/poison_rain_of_arrow",
    rune_tag: [
      "攻擊",
      "廣域",
      "打擊",
      "毒性",
      "投射體",
      "弓",
      "合成限定",
      "毒性箭雨",
    ],
    rune_limit: ["無法並列發射，無法分離，無法連鎖", "可使用弓"],
    rune_rank_effect: {
      magic: "中毒機率+20%<br>中毒傷害+50%",
      rare: "中毒機率+25%<br>中毒傷害+100%<br>爆炸範圍+30",
      legend:
        "中毒機率+30%<br>中毒傷害+150%<br>爆炸範圍+30<br>對處於中毒狀態的敵人傷害15%增幅",
    },
    rune_lv30: {
      consume: "18.5",
      value: "毒性傷害+248<br>毒性傷害170%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "attack_impulse",
    rune_name_ch: "攻擊衝動",
    rune_content:
      "使用時，以施展者的敏捷數值成正比的比例，暫時增加攻擊速度和物理傷害",
    rune_img_url: "/img/rune/skill/green/攻擊衝動.jpg",
    link_url: "/rune/attack_impulse",
    rune_tag: ["咒文", "攻擊強化", "持續時間", "合成限定", "攻擊衝動"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "強化技能符文效果+5%",
      rare: "強化技能符文效果+10%",
      legend: "強化技能符文效果+16%",
    },
    rune_lv30: {
      consume: "待補",
      value: "待補",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "seal_of_accuracy",
    rune_name_ch: "準確度紋章",
    rune_content: "使目標的準確度增加",
    rune_img_url: "/img/rune/skill/green/準確度紋章.jpg",
    link_url: "/rune/posion_explosion",
    rune_tag: ["咒文", "攻擊紋章", "切換", "合成限定", "準確度紋章"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "N/A",
      rare: "光環及紋章效果+30%",
      legend: "光環及紋章效果+60%",
    },
    rune_lv30: {
      consume: "待補",
      value: "待補",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "seal_of_dodge",
    rune_name_ch: "迴避紋章",
    rune_content: "使目標的迴避度增加",
    rune_img_url: "/img/rune/skill/green/迴避紋章.jpg",
    link_url: "/rune/seal_of_dodge",
    rune_tag: ["咒文", "防禦紋章", "切換", "公會限定", "迴避紋章"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "N/A",
      rare: "光環及紋章效果+30%",
      legend: "光環及紋章效果+60%",
    },
    rune_lv30: {
      consume: "20%",
      value: "迴避度+122%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "seal_of_critical_chance",
    rune_name_ch: "暴擊率紋章",
    rune_content: "使目標的暴擊度增加",
    rune_img_url: "/img/rune/skill/green/暴擊率紋章.jpg",
    link_url: "/rune/seal_of_critical_chance",
    rune_tag: ["咒文", "攻擊紋章", "切換", "合成限定", "暴擊率紋章"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "N/A",
      rare: "光環及紋章效果+30%",
      legend: "光環及紋章效果+60%",
    },
    rune_lv30: {
      consume: "待補",
      value: "待補",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "sentry_expert",
    rune_name_ch: "弩專家",
    rune_content: "使弩的能力值隨戰況改變",
    rune_img_url: "/img/rune/skill/green/弩專家.jpg",
    link_url: "/rune/sentry_expert",
    rune_tag: [
      "咒文",
      "防禦強化",
      "攻擊強化",
      "切換",
      "切換效果",
      "合成限定",
      "弩專家",
    ],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "技能符文效果+15%",
      rare: "技能符文效果+40%",
      legend: "技能符文效果+70%",
    },
    rune_lv30: {
      consume: "待補",
      value: "待補",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "shockwave_arrow",
    rune_name_ch: "衝擊波箭矢",
    rune_content: "發射短程的貫穿箭矢，對敵人造成傷害",
    rune_img_url: "/img/rune/skill/green/衝擊波箭矢.jpg",
    link_url: "/rune/shockwave_arrow",
    rune_tag: [
      "攻擊",
      "近距",
      "打擊",
      "物理",
      "投射體",
      "弓",
      "合成限定",
      "衝擊波箭矢",
    ],
    rune_limit: ["無法分離，無法連鎖", "可使用弓"],
    rune_rank_effect: {
      magic: "N/A",
      rare: "與敵人的距離少於400cm以下時，傷害倍率+40%<br>攻擊暴擊度+50%",
      legend:
        "與敵人的距離少於400cm以下時，傷害倍率+70%<br>攻擊暴擊度+100%<br>攻擊暴擊傷害+40%",
    },
    rune_lv30: {
      consume: "待補",
      value: "待補",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "spinning_dagger",
    rune_name_ch: "迴旋短劍",
    rune_content: "發射迴旋短劍，貫穿直線上的敵人並造成傷害",
    rune_img_url: "/img/rune/skill/green/迴旋短劍.jpg",
    link_url: "/rune/spinning_dagger",
    rune_tag: ["攻擊", "打擊", "物理", "投射體", "合成限定", "迴旋短劍"],
    rune_limit: ["無法並列發射，無法分離，無法連鎖", "可使用所有武器"],
    rune_rank_effect: {
      magic: "N/A",
      rare: "投射體傷害+100%<br>防禦度貫穿+15%<br>投射體傷害10%增幅<br>增加迴旋短劍大小",
      legend:
        "投射體傷害+150%<br>防禦度貫穿+30%<br>投射體傷害20%增幅<br>增加迴旋短劍大小",
    },
    rune_lv30: {
      consume: "待補",
      value: "待補",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "veil_of_protection",
    rune_name_ch: "保護帷幕",
    rune_content: "每次使用技能時，減少所受近程傷害或投射體傷害",
    rune_img_url: "/img/rune/skill/green/保護帷幕.jpg",
    link_url: "/rune/veil_of_protection",
    rune_tag: ["咒文", "防禦強化", "切換", "效果切換", "合成限定", "保護帷幕"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "N/A",
      rare: "土地帷幕效果+15%<br>風帷幕效果+15%",
      legend: "土地帷幕效果+35%<br>風帷幕效果+35%",
    },
    rune_lv30: {
      consume: "待補",
      value: "待補",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "seal_of_chaos_resist",
    rune_name_ch: "混沌抵抗紋章",
    rune_content: "使目標的混沌抵抗增加",
    rune_img_url: "/img/rune/skill/green/混沌抵抗紋章.jpg",
    link_url: "/rune/seal_of_chaos_resist",
    rune_tag: ["咒文", "防禦紋章", "切換", "公會限定", "混沌抵抗紋章"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "N/A",
      rare: "N/A",
      legend: "光環及紋章效果+25%",
    },
    rune_lv30: {
      consume: "待補",
      value: "待補",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "enchanted_crossbow",
    rune_name_ch: "魔力弩",
    rune_content: "集中時，以疊加數等比的比例，使周圍的弩攻擊速度增幅",
    rune_img_url: "/img/rune/skill/green/魔力弩.jpg",
    link_url: "/rune/enchanted_crossbow",
    rune_tag: ["咒文", "集中", "攻擊強化", "合成限定", "魔力弩"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "N/A",
      rare: "N/A",
      legend: "技能符文效果+25%",
    },
    rune_lv30: {
      consume: "待補",
      value: "待補",
    },
    sub_content: [],
    source: [],
  },

  // end
];
