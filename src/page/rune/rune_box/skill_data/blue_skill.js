export const blue_skill = [
  {
    rune_name_en: "summon_abyssling",
    rune_name_ch: "召喚深淵體",
    rune_content: "向前方飛躍，落地時，對敵人造成傷害並擊退敵人",
    rune_img_url: "/img/rune/skill/blue/召喚深淵體.jpg",
    link_url: "/rune/summon_abyssling",
    rune_tag: ["咒文", "僕從", "深淵體", "召喚深淵體"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "深淵體生命力+30%<br>深淵體傷害+30%",
      rare: "深淵體生命力+75%<br>深淵體傷害+60%<br>深淵體傷害10%增幅",
      legend: "深淵體生命力+125%<br>深淵體傷害+100%<br>深淵體傷害20%增幅",
    },
    rune_lv30: {
      consume: "80",
      value:
        "召喚等級30<br>召喚持續時間59秒<br>基本攻擊傷害110%<br>突進攻擊傷害200%<br>僕從暴擊度+13<br>深淵體生命+37.5%",
    },
    sub_content: [
      {
        sub_content_title: "備註",
        rune_sub_content: "深淵體具有打擊、廣域、物理、近距特性",
        img: [],
      },
    ],
    source: [],
  },
  {
    rune_name_en: "gather_minions",
    rune_name_ch: "僕從集結",
    rune_content: "將已召喚的所有僕從召喚至施展者周圍",
    rune_img_url: "/img/rune/skill/blue/僕從集結.jpg",
    link_url: "/rune/gather_minions",
    rune_tag: ["咒文", "持續時間", "僕從集結"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "僕從集結持續時間+100%<br>僕從集結傷害+5%",
      rare: "僕從集結持續時間+100%<br>僕從集結傷害+10%",
      legend: "僕從集結持續時間+150%<br>僕從集結傷害+13%",
    },
    rune_lv30: {
      consume: "49",
      value: "僕從傷害+200%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "fire_ball",
    rune_name_ch: "火焰球",
    rune_content: "發射火焰球，命中時爆發，造成火焰傷害",
    rune_img_url: "/img/rune/skill/blue/火焰球.jpg",
    link_url: "/rune/fire_ball",
    rune_tag: ["咒文", "廣域", "打擊", "火焰", "投射體", "火焰球"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "對處於燃燒狀態的敵人傷害15%增幅<br>燃燒傷害+50%<br>燃燒機率+10%",
      rare: "對處於燃燒狀態的敵人傷害20%增幅<br>燃燒傷害+70%<br>燃燒機率+20%<br>廣域範圍+20",
      legend:
        "對處於燃燒狀態的敵人傷害30%增幅<br>燃燒傷害+100%<br>燃燒機率+30%<br>廣域範圍+20",
    },
    rune_lv30: {
      consume: "19.5",
      value: "火焰傷害+1480<br>火焰傷害288%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "frost_ball",
    rune_name_ch: "寒霜球",
    rune_content: "發射緩慢移動的寒霜球，貫穿路徑上的敵人，並造成冰霜傷害",
    rune_img_url: "/img/rune/skill/blue/寒霜球.jpg",
    link_url: "/rune/frost_ball",
    rune_tag: ["咒文", "打擊", "冰霜", "投射體", "寒霜球"],
    rune_limit: ["無法分離、無法連鎖", "可使用所有武器"],
    rune_rank_effect: {
      magic: "對處於惡寒狀態的敵人傷害+50%<br>打擊傷害倍率+30%<br>惡寒機率+10%",
      rare: "對處於惡寒狀態的敵人傷害+100%<br>打擊傷害倍率+60%<br>惡寒機率+20%<br>惡寒效果+35%",
      legend:
        "對處於惡寒狀態的敵人傷害+150%<br>打擊傷害倍率+150%<br>惡寒機率+30%<br>惡寒效果+35%",
    },
    rune_lv30: {
      consume: "19.5",
      value: "冰霜傷害+351<br>冰霜傷害509%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "frost_shock",
    rune_name_ch: "寒霜衝擊",
    rune_content: "在施展者周圍產生冰霜尖刺地帶，並對敵人造成冰霜傷害",
    rune_img_url: "/img/rune/skill/blue/寒霜衝擊.jpg",
    link_url: "/rune/frost_shock",
    rune_tag: ["咒文", "近距", "廣域", "打擊", "冰霜", "寒霜衝擊"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "對處於冰霜狀態異常的敵人傷害增幅10%<br>惡寒機率+5%",
      rare: "對處於冰霜狀態異常的敵人傷害增幅25%<br>惡寒機率+10%<br>廣域範圍+50",
      legend:
        "對處於冰霜狀態異常的敵人傷害增幅35%<br>惡寒機率+15%<br>冰凍機率+5%<br>廣域範圍+50",
    },
    rune_lv30: {
      consume: "16.6",
      value: "冰霜傷害+300<br>冰霜傷害611%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "poision_orb",
    rune_name_ch: "毒珠",
    rune_content: "發射向前方竄出的毒珠，對敵人造成毒性傷害",
    rune_img_url: "/img/rune/skill/blue/毒珠.jpg",
    link_url: "/rune/poision_orb",
    rune_tag: ["咒文", "廣域", "打擊", "毒性", "投射體", "毒珠"],
    rune_limit: ["無法分離，無法變更速度", "可使用所有武器"],
    rune_rank_effect: {
      magic: "對處於中毒狀態的敵人傷害+20%<br>廣域範圍+10",
      rare: "投射體傷害+30%<br>對處於中毒狀態的敵人傷害+40%<br>廣域範圍+20",
      legend: "投射體傷害+65%<br>對處於中毒狀態的敵人傷害+60%<br>廣域範圍+30",
    },
    rune_lv30: {
      consume: "19.5",
      value: "毒性傷害+223<br>毒性傷害94%<br>中毒傷害+108%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "lightning_typhoon",
    rune_name_ch: "閃電颱風",
    rune_content:
      "在一定時間內召喚閃電颱風，閃電颱風將跟隨敵人，並造成閃電傷害",
    rune_img_url: "/img/rune/skill/blue/閃電颱風.jpg",
    link_url: "/rune/lightning_typhoon",
    rune_tag: ["咒文", "廣域", "打擊", "閃電", "投射體", "閃電颱風"],
    rune_limit: ["無法多重發射，無法分離，無法連鎖", "可使用所有武器"],
    rune_rank_effect: {
      magic: "觸電機率+9%",
      rare: "對處於觸電狀態的敵人傷害10%增幅<br>觸電機率+18%<br>廣域範圍+50",
      legend: "對處於觸電狀態的敵人傷害20%增幅<br>觸電機率+27%<br>廣域範圍+75",
    },
    rune_lv30: {
      consume: "88",
      value: "閃電傷害+1848<br>閃電傷害88%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "frost_thorn",
    rune_name_ch: "寒霜尖刺",
    rune_content: "連續發射寒霜尖刺，對敵人造成冰霜傷害",
    rune_img_url: "/img/rune/skill/blue/寒霜尖刺.jpg",
    link_url: "/rune/fire_ball",
    rune_tag: ["咒文", "打擊", "冰霜", "投射體", "寒霜尖刺"],
    rune_limit: ["無法並列發射", "可使用所有武器"],
    rune_rank_effect: {
      magic: "咒文暴擊傷害+30%",
      rare: "咒文暴擊傷害+70%<br>咒文暴擊度+30%",
      legend: "投射體數量+1<br>咒文暴擊傷害+70%<br>咒文暴擊度+60%",
    },
    rune_lv30: {
      consume: "21.4",
      value: "冰霜傷害+299<br>冰霜傷害190%<br>咒文暴擊傷害+44%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "flamethrower",
    rune_name_ch: "火焰輻射",
    rune_content:
      "造成火焰傷害，集中時，每個階段將增加範圍，且火焰傷害增幅。解除集中時，引發火焰爆炸",
    rune_img_url: "/img/rune/skill/blue/火焰輻射.jpg",
    link_url: "/rune/flamethrower",
    rune_tag: ["咒文", "近距", "廣域", "集中", "持續傷害", "火焰", "火焰輻射"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "持續傷害+50%<br>元素貫穿+10%",
      rare: "持續傷害+100%<br>元素貫穿+15%<br>持續傷害倍率增幅15%",
      legend: "持續傷害+150%<br>元素貫穿+30%<br>持續傷害倍率增幅30%",
    },
    rune_lv30: {
      consume: "20",
      value:
        "火焰傷害+2078<br>火焰傷害150%<br>縱火持續傷害+2078<br>縱火持續傷害150%<br>每階段縱火傷害倍率+39%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "charge_release",
    rune_name_ch: "電荷釋放",
    rune_content: "發射多個電荷，對敵人造成閃電傷害",
    rune_img_url: "/img/rune/skill/blue/電荷釋放.jpg",
    link_url: "/rune/charge_release",
    rune_tag: ["咒文", "打擊", "閃電", "投射體", "電荷釋放"],
    rune_limit: ["無法並列發射", "可使用所有武器"],
    rune_rank_effect: {
      magic: "投射體數量+2<br>觸電機率+9%",
      rare: "投射體數量+3<br>觸電機率+14%<br>施展速度+15%",
      legend: "投射體數量+4<br>觸電機率+19%<br>施展速度+30%",
    },
    rune_lv30: {
      consume: "19.5",
      value: "閃電傷害+1476<br>閃電傷害294%<br>電荷數量+11",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "toxic_flame",
    rune_name_ch: "毒性火花",
    rune_content:
      "發射可以貫穿的劇毒火花，造成持續毒性傷害。不受對投射體傷害的影響",
    rune_img_url: "/img/rune/skill/blue/毒性火花.jpg",
    link_url: "/rune/toxic_flame",
    rune_tag: ["咒文", "持續傷害", "毒性", "投射體", "毒性火花"],
    rune_limit: ["無法分離，無法連鎖", "可使用所有武器"],
    rune_rank_effect: {
      magic: "持續傷害+20%",
      rare: "投射體數量+2<br>持續傷害+60%",
      legend: "投射體數量+2<br>持續傷害+100%",
    },
    rune_lv30: {
      consume: "23.4",
      value: "毒性傷害+1500<br>毒性傷害155%<br>火花數量+5",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "summon_javelin_abyssling",
    rune_name_ch: "召喚標槍深淵體",
    rune_content: "召喚能持續擲箭並造成物理傷害的深淵體，召喚時需要付費",
    rune_img_url: "/img/rune/skill/blue/召喚標槍深淵體.jpg",
    link_url: "/rune/summon_javelin_abyssling",
    rune_tag: ["咒文", "僕從", "深淵體", "召喚標槍深淵體"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "深淵體生命力+30%<br>深淵體攻擊速度+10%",
      rare: "深淵體生命力+50%<br>深淵體攻擊速度+10%<br>深淵體傷害+100%",
      legend: "深淵體生命力+80%<br>深淵體攻擊速度+18%<br>深淵體傷害+150%",
    },
    rune_lv30: {
      consume: "80",
      value:
        "召喚等級30<br>召喚持續時間59秒<br>基本攻擊傷害80%<br>僕從暴擊度+13<br>深淵體生命+37.5%",
    },
    sub_content: [
      {
        sub_content_title: "備註",
        rune_sub_content: "深淵體具有打擊、物理、投射體特性",
        img: [],
      },
    ],
    source: [],
  },
  {
    rune_name_en: "unite_crowd",
    rune_name_ch: "光暈羈絆(狂暴化)",
    rune_content: "每當使用技能時，變更僕從所套用的資源",
    rune_img_url: "/img/rune/skill/blue/光暈羈絆(狂暴化).jpg",
    link_url: "/rune/unite_crowd",
    rune_tag: [
      "咒文",
      "攻擊強化",
      "防禦強化",
      "切換",
      "效果切換",
      "光暈羈絆(狂暴化)",
    ],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "羈絆效果+5%<br>狂暴效果+5%",
      rare: "羈絆效果+10%<br>狂暴效果+10%",
      legend: "羈絆效果+15%<br>狂暴效果+15%",
    },
    rune_lv30: {
      consume: "15%",
      value:
        "光暈羈絆<br>防禦度+75%<br>元素抵抗力+25<br>光暈狂暴<br>攻擊速度+22%<br>施展速度+22%<br>暴擊度+49",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "summon_bursting_rune_knight",
    rune_name_ch: "召喚炙熱符文騎士",
    rune_content:
      "召喚定期向前方發射火焰，使周圍深淵體強化的火焰屬性符文騎士，召喚時需要付費",
    rune_img_url: "/img/rune/skill/blue/召喚炙熱符文騎士.jpg",
    link_url: "/rune/summon_bursting_rune_knight",
    rune_tag: ["咒文", "僕從", "符文騎士", "召喚炙熱符文騎士"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "符文騎士生命力+30%<br>符文騎士傷害+50%",
      rare: "符文騎士生命力+75%<br>符文騎士傷害+100%",
      legend: "符文騎士生命力+125%<br>符文騎士傷害+150%",
    },
    rune_lv30: {
      consume: "137",
      value: "召喚等級30<br>符文騎士生命力+37.5%<br>深淵體傷害+54.2%",
    },
    sub_content: [
      {
        sub_content_title: "備註",
        rune_sub_content: "符文騎士具有打擊、廣域、火焰、近距特性",
        img: [],
      },
    ],
    source: [],
  },
  {
    rune_name_en: "summon_javelin_abyssling",
    rune_name_ch: "神聖的奉獻",
    rune_content:
      "集中時，雖使施展者的防禦度及所有元素抗性減少，但僕從的傷害增加",
    rune_img_url: "/img/rune/skill/blue/神聖的奉獻.jpg",
    link_url: "/rune/summon_javelin_abyssling",
    rune_tag: ["咒文", "集中", "攻擊強化", "神聖的奉獻"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "神聖的奉獻僕從效果+7%",
      rare: "神聖的奉獻僕從效果+10%<br>神聖的奉獻施展者效果-10%",
      legend:
        "階段上限+1<br>神聖的奉獻僕從效果+20%<br>神聖的奉獻施展者效果-20%",
    },
    rune_lv30: {
      consume: "25",
      value: "每個疊加僕從傷害10.8%增幅",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "cold_armor",
    rune_name_ch: "冰霜鎧甲",
    rune_content:
      "受到近距離攻擊時，形成冰幕，對攻擊自身的目標造成冰霜傷害即產生惡寒",
    rune_img_url: "/img/rune/skill/blue/冰霜鎧甲.jpg",
    link_url: "/rune/cold_armor",
    rune_tag: [
      "咒文",
      "打擊",
      "冰霜",
      "切換",
      "傷害切換",
      "效果切換",
      "冰霜鎧甲",
    ],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "冰霜鎧甲效果+10%",
      rare: "冰霜鎧甲效果+20%",
      legend: "冰霜鎧甲效果+35%",
    },
    rune_lv30: {
      consume: "15%",
      value: "冰霜傷害+223<br>防護罩+24.5%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "lightning_chain",
    rune_name_ch: "閃電鎖鏈",
    rune_content: "釋放連鎖閃電，對敵人造成閃電傷害",
    rune_img_url: "/img/rune/skill/blue/閃電鎖鏈.jpg",
    link_url: "/rune/lightning_chain",
    rune_tag: ["咒文", "打擊", "閃電", "閃電鎖鏈"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "連鎖次數+1<br>對處於觸電狀態的敵人傷害10%增幅<br>施展距離+50",
      rare: "連鎖次數+2<br>對處於觸電狀態的敵人傷害20%增幅<br>觸電機率+10%<br>施展距離+100",
      legend:
        "連鎖次數+4<br>對處於觸電狀態的敵人傷害30%增幅<br>觸電機率+20%<br>施展距離+150",
    },
    rune_lv30: {
      consume: "20.5",
      value: "閃電傷害+406<br>閃電傷害580%<br>連鎖次數+5",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "meteor",
    rune_name_ch: "隕石墜落",
    rune_content: "向前方降下巨型隕石，對範圍內的敵人造成傷害",
    rune_img_url: "/img/rune/skill/blue/隕石墜落.jpg",
    link_url: "/rune/meteor",
    rune_tag: ["咒文", "廣域", "打擊", "火焰", "投射體", "隕石墜落"],
    rune_limit: ["無法多重發射，無法分離，無法連鎖", "可使用所有武器"],
    rune_rank_effect: {
      magic: "廣域傷害+50%<br>廣域範圍+70<br>對處於燃燒狀態的敵人傷害5%增幅",
      rare: "廣域傷害+100%<br>廣域範圍+120<br>燃燒機率+5%<br>對處於燃燒狀態的敵人傷害10%增幅",
      legend:
        "廣域傷害+150%<br>廣域範圍+120<br>燃燒機率+10%<br>對處於燃燒狀態的敵人傷害10%增幅",
    },
    rune_lv30: {
      consume: "83",
      value: "火焰傷害+1848<br>火焰傷害1044%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "poison_area",
    rune_name_ch: "毒性地帶",
    rune_content: "在一定時間內產生毒性地帶，對敵人造成毒性傷害",
    rune_img_url: "/img/rune/skill/blue/毒性地帶.jpg",
    link_url: "/rune/poison_area",
    rune_tag: ["咒文", "持續傷害", "毒性", "毒性地帶"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "持續傷害10%增幅<br>廣域範圍+50",
      rare: "持續傷害20%增幅<br>廣域範圍+100<br>使用次數上限+1",
      legend: "持續傷害30%增幅<br>廣域範圍+150<br>使用次數上限+2",
    },
    rune_lv30: {
      consume: "83",
      value: "毒性持續傷害+236<br>毒性持續傷害746%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "plague_spike",
    rune_name_ch: "瘟疫之刺",
    rune_content:
      "發射瘟疫之刺，對敵人造成毒性傷害，命中時以一定機率釋放瘟疫，對周圍的敵人造成持續傷害",
    rune_img_url: "/img/rune/skill/blue/瘟疫之刺.jpg",
    link_url: "/rune/plague_spike",
    rune_tag: [
      "咒文",
      "廣域",
      "打擊",
      "毒性",
      "投射體",
      "持續時間",
      "瘟疫之刺",
    ],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "傷害+30%",
      rare: "傷害+60%<br>傷害10%增幅<br>廣域範圍+20%",
      legend: "傷害+100%<br>傷害20%增幅<br>廣域範圍+50%<br>施展速度5%增幅",
    },
    rune_lv30: {
      consume: "19.5",
      value:
        "毒性傷害+277<br>毒性傷害660%<br>毒性持續傷害+598<br>毒性持續傷害200%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "frost_bomb",
    rune_name_ch: "寒霜炸彈",
    rune_content:
      "在一定時間後，發射爆炸的寒霜炸彈，爆炸時發射冰霜破片，對敵人造成冰霜傷害",
    rune_img_url: "/img/rune/skill/blue/寒霜炸彈.jpg",
    link_url: "/rune/frost_bomb",
    rune_tag: ["咒文", "打擊", "冰霜", "投射體", "寒霜炸彈"],
    rune_limit: ["無法並列發射", "可使用所有武器"],
    rune_rank_effect: {
      magic:
        "投射體速度+10%<br>惡寒機率+10%<br>對處於惡寒狀態的敵人傷害倍率+30%",
      rare: "投射體速度+10%<br>惡寒機率+20%<br>對處於惡寒狀態的敵人傷害倍率+60%<br>投射體數量+1",
      legend:
        "投射體速度+15%<br>惡寒機率+30%<br>對處於惡寒狀態的敵人傷害倍率+100%<br>投射體數量+2",
    },
    rune_lv30: {
      consume: "19.5",
      value: "冰霜傷害+545<br>冰霜傷害530%<br>破片數量+8",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "thunderbolt",
    rune_name_ch: "雷電",
    rune_content:
      "受到近距離傷害時，以一定機率對攻擊自己的敵人發動落雷，對敵人造成傷害",
    rune_img_url: "/img/rune/skill/blue/雷電.jpg",
    link_url: "/rune/thunderbolt",
    rune_tag: ["咒文", "打擊", "閃電", "切換", "傷害切換", "雷電"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "觸電機率+2%",
      rare: "觸電機率+5%",
      legend: "觸電機率+9%",
    },
    rune_lv30: {
      consume: "15%",
      value: "閃電傷害+248<br>閃電傷害370%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "summon_fire_orb_abyssling",
    rune_name_ch: "召喚火珠深淵體",
    rune_content: "召喚能發射火焰珠的深淵體，召喚時需要付費",
    rune_img_url: "/img/rune/skill/blue/召喚火珠深淵體.jpg",
    link_url: "/rune/summon_fire_orb_abyssling",
    rune_tag: ["咒文", "僕從", "深淵體", "召喚火珠深淵體"],
    rune_limit: ["無法分離", "可使用所有武器"],
    rune_rank_effect: {
      magic: "深淵體生命力+30%<br>對處於傷害狀態異常的敵人深淵體傷害+50%",
      rare: "深淵體生命力+50%<br>深淵體燃燒發生指數+20<br>對處於傷害狀態異常的敵人深淵體傷害+100%<br>深淵體傷害10%增幅",
      legend:
        "深淵體生命力+80%<br>深淵體燃燒發生指數+36<br>對處於傷害狀態異常的敵人深淵體傷害+150%<br>深淵體傷害30%增幅",
    },
    rune_lv30: {
      consume: "85",
      value:
        "召喚等級30<br>召喚持續時間59秒<br>爆炸範圍208<br>基本攻擊傷害120%<br>僕從暴擊度+13<br>深淵體生命+37.5%",
    },
    sub_content: [
      {
        sub_content_title: "備註",
        rune_sub_content: "深淵體具有打擊、範圍、廣域、火焰、投射體特性",
        img: [],
      },
    ],
    source: [],
  },
  {
    rune_name_en: "summon_poison_arrow_abyssling",
    rune_name_ch: "召喚毒性箭矢深淵體",
    rune_content: "召喚命中敵人時能連鎖發射毒性箭矢的深淵體，召喚時需要付費",
    rune_img_url: "/img/rune/skill/blue/召喚毒性箭矢深淵體.jpg",
    link_url: "/rune/summon_poison_arrow_abyssling",
    rune_tag: ["咒文", "僕從", "深淵體", "召喚毒性箭矢深淵體"],
    rune_limit: ["無法分離", "可使用所有武器"],
    rune_rank_effect: {
      magic: "深淵體生命力+30%<br>對處於傷害狀態異常的敵人深淵體傷害+50%",
      rare: "深淵體生命力+50%<br>深淵體中毒發生指數+20<br>對處於傷害狀態異常的敵人深淵體傷害+100%<br>深淵體傷害10%增幅",
      legend:
        "深淵體生命力+80%<br>深淵體中毒發生指數+36<br>對處於傷害狀態異常的敵人深淵體傷害+150%<br>深淵體傷害30%增幅",
    },
    rune_lv30: {
      consume: "85",
      value:
        "召喚等級30<br>召喚持續時間59秒<br>基本攻擊傷害120%<br>僕從暴擊度+13<br>深淵體生命+37.5%",
    },
    sub_content: [
      {
        sub_content_title: "備註",
        rune_sub_content: "深淵體具有打擊、毒性、投射體特性",
        img: [],
      },
    ],
    source: [],
  },
  {
    rune_name_en: "summon_lightning_arrow_abyssling",
    rune_name_ch: "召喚閃電箭矢深淵體",
    rune_content: "召喚能發射貫穿敵人的閃電箭矢的深淵體，召喚時需要付費",
    rune_img_url: "/img/rune/skill/blue/召喚閃電箭矢深淵體.jpg",
    link_url: "/rune/summon_lightning_arrow_abyssling",
    rune_tag: ["咒文", "僕從", "深淵體", "召喚閃電箭矢深淵體"],
    rune_limit: ["無法分離，無法連鎖", "可使用所有武器"],
    rune_rank_effect: {
      magic: "深淵體生命力+30%<br>對處於弱化狀態異常的敵人深淵體傷害+50%",
      rare: "深淵體生命力+50%<br>深淵體觸電發生指數+20<br>對處於弱化狀態異常的敵人深淵體傷害+100%<br>深淵體傷害10%增幅",
      legend:
        "深淵體生命力+80%<br>深淵體觸電發生指數+36<br>對處於弱化狀態異常的敵人深淵體傷害+150%<br>深淵體傷害30%增幅",
    },
    rune_lv30: {
      consume: "85",
      value:
        "召喚等級30<br>召喚持續時間59秒<br>基本攻擊傷害120%<br>僕從暴擊度+13<br>深淵體生命+37.5%",
    },
    sub_content: [
      {
        sub_content_title: "備註",
        rune_sub_content: "深淵體具有打擊、閃電、投射體特性",
        img: [],
      },
    ],
    source: [],
  },
  {
    rune_name_en: "summon_snow_orb_abyssling",
    rune_name_ch: "召喚雪珠深淵體",
    rune_content:
      "召喚命中敵人時能以分離狀態發射冰霜珠的深淵體，召喚時需要付費",
    rune_img_url: "/img/rune/skill/blue/召喚雪珠深淵體.jpg",
    link_url: "/rune/summon_snow_orb_abyssling",
    rune_tag: ["咒文", "僕從", "深淵體", "召喚雪珠深淵體"],
    rune_limit: ["無法連鎖", "可使用所有武器"],
    rune_rank_effect: {
      magic: "深淵體生命力+30%<br>對處於弱化狀態異常的敵人深淵體傷害+50%",
      rare: "深淵體生命力+50%<br>深淵體惡寒發生指數+20<br>對處於弱化狀態異常的敵人深淵體傷害+100%<br>深淵體傷害10%增幅",
      legend:
        "深淵體生命力+80%<br>深淵體惡寒發生指數+36<br>對處於弱化狀態異常的敵人深淵體傷害+150%<br>深淵體傷害30%增幅",
    },
    rune_lv30: {
      consume: "85",
      value:
        "召喚等級30<br>召喚持續時間59秒<br>基本攻擊傷害120%<br>僕從暴擊度+13<br>深淵體生命+37.5%",
    },
    sub_content: [
      {
        sub_content_title: "備註",
        rune_sub_content: "深淵體具有打擊、冰霜、投射體特性",
        img: [],
      },
    ],
    source: [],
  },
  {
    rune_name_en: "mark_of_focus",
    rune_name_ch: "指定標誌",
    rune_content:
      "在一定時間內對敵人留下標誌，被刻上標誌的敵人將成為僕從的集中攻擊對象，且僕從造成的傷害增加",
    rune_img_url: "/img/rune/skill/blue/指定標誌.jpg",
    link_url: "/rune/mark_of_focus",
    rune_tag: ["咒文", "攻擊強化", "持續時間", "指定標誌"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "攻擊強化技能符文效果+10%",
      rare: "攻擊強化技能符文效果+17%<br>攻擊強化技能符文持續時間+25%",
      legend: "攻擊強化技能符文效果+27%<br>攻擊強化技能符文持續時間+50%",
    },
    rune_lv30: {
      consume: "44",
      value: "僕從造成的傷害30%增加",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "siphon_life",
    rune_name_ch: "生命奪取",
    rune_content: "在持續時間內，對周圍我軍及自身賦予吸收敵人生命力的效果",
    rune_img_url: "/img/rune/skill/blue/生命奪取.jpg",
    link_url: "/rune/siphon_life",
    rune_tag: ["咒文", "防禦強化", "持續時間", "生命奪取"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "生命力吸收上限+5%<br>強化技能符文效果+5%",
      rare: "生命力吸收上限+10%<br>強化技能符文效果+10%",
      legend: "生命力吸收上限+15%<br>強化技能符文效果+15%",
    },
    rune_lv30: {
      consume: "54",
      value: "命中時，生命力吸收+4.9%%增加",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "summon_arctic_rune_knight",
    rune_name_ch: "召喚酷寒符文騎士",
    rune_content:
      "召喚能使用寒霜疾風技能，定期打擊自身周圍的敵人，並強化周圍深淵體的冰霜屬性符文騎士，召喚時需要付費",
    rune_img_url: "/img/rune/skill/blue/召喚酷寒符文騎士.jpg",
    link_url: "/rune/summon_arctic_rune_knight",
    rune_tag: ["咒文", "僕從", "符文騎士", "召喚酷寒符文騎士"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "符文騎士生命力+30%<br>符文騎士傷害+50%",
      rare: "符文騎士生命力+75%<br>符文騎士傷害+100%",
      legend: "符文騎士生命力+125%<br>符文騎士傷害+150%",
    },
    rune_lv30: {
      consume: "137",
      value:
        "召喚等級30<br>符文騎士生命力+37.5%<br>深淵體攻擊速度+13.2%<br>深淵體施展速度+13.2%",
    },
    sub_content: [
      {
        sub_content_title: "備註",
        rune_sub_content: "符文騎士具有打擊、廣域、冰霜、近距特性",
        img: [],
      },
    ],
    source: [],
  },
  {
    rune_name_en: "summon_lightning_rune_knight",
    rune_name_ch: "召喚電擊符文騎士",
    rune_content:
      "召喚能向前方定期使出閃電波長技能，並強化周圍深淵體的閃電屬性符文騎士，召喚時需要付費",
    rune_img_url: "/img/rune/skill/blue/召喚電擊符文騎士.jpg",
    link_url: "/rune/summon_lightning_rune_knight",
    rune_tag: ["咒文", "僕從", "符文騎士", "召喚電擊符文騎士"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "符文騎士生命力+30%<br>符文騎士傷害+50%",
      rare: "符文騎士生命力+75%<br>符文騎士傷害+100%",
      legend: "符文騎士生命力+125%<br>符文騎士傷害+150%",
    },
    rune_lv30: {
      consume: "137",
      value: "召喚等級30<br>符文騎士生命力+37.5%<br>深淵體暴擊度+54.2%",
    },
    sub_content: [
      {
        sub_content_title: "備註",
        rune_sub_content: "符文騎士具有打擊、廣域、電擊、近距特性",
        img: [],
      },
    ],
    source: [],
  },
  {
    rune_name_en: "release_element",
    rune_name_ch: "元素釋放",
    rune_content: "在持續時間內，元素傷害增幅，施展速度增加",
    rune_img_url: "/img/rune/skill/blue/元素釋放.jpg",
    link_url: "/rune/release_element",
    rune_tag: ["咒文", "攻擊強化", "持續時間", "元素釋放"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "強化技能符文效果+5%",
      rare: "強化技能符文效果+10%",
      legend: "強化技能符文效果+15%",
    },
    rune_lv30: {
      consume: "48.2",
      value: "元素傷害29.5%增幅",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "intensify_pain",
    rune_name_ch: "痛苦加劇",
    rune_content: "在持續時間內，傷害狀態異常發生指數、持續時間及傷害增加",
    rune_img_url: "/img/rune/skill/blue/痛苦加劇.jpg",
    link_url: "/rune/intensify_pain",
    rune_tag: ["咒文", "攻擊強化", "持續時間", "痛苦加劇"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "強化技能符文效果+5%",
      rare: "強化技能符文效果+10%",
      legend: "強化技能符文效果+15%",
    },
    rune_lv30: {
      consume: "48.2",
      value: "傷害狀態異常發生指數+122<br>狀態異常傷害29.5%增幅%增加",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "cold_outburst",
    rune_name_ch: "冰霜爆裂",
    rune_content:
      "形成多個冰霜飛彈並朝向前方發射，命中目標後方會有冰霜破片射出",
    rune_img_url: "/img/rune/skill/blue/冰霜爆裂.jpg",
    link_url: "/rune/cold_outburst",
    rune_tag: ["咒文", "廣域", "打擊", "冰霜", "投射體", "冰霜爆裂"],
    rune_limit: [
      "無法多重發射，無法分離，無法連鎖，無法變更速度",
      "可使用所有武器",
    ],
    rune_rank_effect: {
      magic: "對處於惡寒狀態的敵人傷害+30%<br>惡寒機率+3%",
      rare: "對處於惡寒狀態的敵人傷害+65%<br>惡寒機率+6%",
      legend: "對處於惡寒狀態的敵人傷害+110%<br>惡寒機率+9%",
    },
    rune_lv30: {
      consume: "88",
      value:
        "爆裂冰霜傷害+869<br>爆裂冰霜傷害201%<br>破片冰霜傷害+211<br>破片冰霜傷害46%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "weaken_element_totem",
    rune_name_ch: "元素弱化圖騰",
    rune_content: "召喚可以增加敵人所受元素傷害的圖騰",
    rune_img_url: "/img/rune/skill/blue/元素弱化圖騰.jpg",
    link_url: "/rune/weaken_element_totem",
    rune_tag: ["咒文", "圖騰", "元素弱化圖騰"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "圖騰效果+8%",
      rare: "圖騰效果+16%<br>圖騰效果範圍+10%",
      legend: "圖騰效果+28%<br>圖騰效果範圍+20%",
    },
    rune_lv30: {
      consume: "54.8",
      value: "所受元素傷害14.7%增加%增加",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "tremor_totem",
    rune_name_ch: "震動圖騰",
    rune_content: "召喚可使敵方移動速度、攻擊速度、施展速度減符的圖騰",
    rune_img_url: "/img/rune/skill/blue/震動圖騰.jpg",
    link_url: "/rune/tremor_totem",
    rune_tag: ["咒文", "圖騰", "震動圖騰"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "圖騰效果+8%",
      rare: "圖騰效果+16%<br>圖騰效果範圍+10%",
      legend: "圖騰效果+28%<br>圖騰效果範圍+20%",
    },
    rune_lv30: {
      consume: "54.8",
      value: "移動速度減幅20.2%<br>攻擊速度減幅16.1%<br>施展速度減幅16.1%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "protection_totem",
    rune_name_ch: "保護圖騰",
    rune_content: "召喚可以增加我軍防護罩，並減少防護罩復甦週期的圖騰",
    rune_img_url: "/img/rune/skill/blue/保護圖騰.jpg",
    link_url: "/rune/protection_totem",
    rune_tag: ["咒文", "圖騰", "保護圖騰"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "圖騰效果+8%",
      rare: "圖騰效果+16%<br>圖騰效果範圍+10%",
      legend: "圖騰效果+28%<br>圖騰效果範圍+20%",
    },
    rune_lv30: {
      consume: "54.8",
      value: "每秒防護罩復甦+49<br>防護罩+117",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "life_totem",
    rune_name_ch: "生命圖騰",
    rune_content: "召喚可以增加我軍生命復甦力的圖騰",
    rune_img_url: "/img/rune/skill/blue/生命圖騰.jpg",
    link_url: "/rune/life_totem",
    rune_tag: ["咒文", "圖騰", "生命圖騰"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "圖騰效果+8%",
      rare: "圖騰效果+16%<br>圖騰效果範圍+10%",
      legend: "圖騰效果+28%<br>圖騰效果範圍+20%",
    },
    rune_lv30: {
      consume: "54.8",
      value: "每秒生命力復甦+151",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "mist_totem",
    rune_name_ch: "霧圖騰",
    rune_content: "召喚可減少敵人命中度、暴擊度的圖騰",
    rune_img_url: "/img/rune/skill/blue/霧圖騰.jpg",
    link_url: "/rune/mist_totem",
    rune_tag: ["咒文", "圖騰", "霧圖騰"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "圖騰效果+8%",
      rare: "圖騰效果+16%<br>圖騰效果範圍+10%",
      legend: "圖騰效果+28%<br>圖騰效果範圍+20%",
    },
    rune_lv30: {
      consume: "54.8",
      value: "命中度減幅29.4%<br>暴擊度減幅17%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "electromagnetic_field",
    rune_name_ch: "電磁場",
    rune_content: "釋放能將敵人瞬間匯聚到中央的電球體",
    rune_img_url: "/img/rune/skill/blue/電磁場.jpg",
    link_url: "/rune/electromagnetic_field",
    rune_tag: ["咒文", "廣域", "打擊", "閃電", "電磁場"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "束縛發生指數+10<br>廣域範圍+50",
      rare: "廣域傷害+20%<br>束縛發生指數+30<br>廣域範圍+50",
      legend: "廣域傷害+50%<br>束縛發生指數+50<br>廣域範圍+100",
    },
    rune_lv30: {
      consume: "83",
      value: "閃電傷害+971<br>閃電傷害546%<br>束縛發生指數+68",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "teleport",
    rune_name_ch: "瞬間移動",
    rune_content: "向前方瞬間移動後，元素抵抗力暫時提升",
    rune_img_url: "/img/rune/skill/blue/瞬間移動.jpg",
    link_url: "/rune/teleport",
    rune_tag: ["咒文", "持續時間", "移動", "瞬間移動"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "空間扭曲效果+10%",
      rare: "空間扭曲效果+24%",
      legend: "空間扭曲效果+37%",
    },
    rune_lv30: {
      consume: "15.6",
      value: "元素抵抗力+50%增加",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "fire_torrent",
    rune_name_ch: "火焰激流",
    rune_content:
      "維持集中時，在一定時間內召喚火焰激流，每道火焰激流攻擊週期將自動攻擊敵人，維持集中時，將進行更快速的攻擊",
    rune_img_url: "/img/rune/skill/blue/火焰激流.jpg",
    link_url: "/rune/fire_torrent",
    rune_tag: ["咒文", "集中", "打擊", "火焰", "投射體", "火焰激流"],
    rune_limit: ["無法並列發射，無法分離，無法連鎖", "可使用所有武器"],
    rune_rank_effect: {
      magic: "投射體數量+1",
      rare: "投射體數量+1<br>集中時，攻擊週期10%",
      legend: "投射體數量+2<br>集中時，攻擊週期20%<br>火焰傷害10%增幅",
    },
    rune_lv30: {
      consume: "待補",
      value: "待補",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "eletric_ball",
    rune_name_ch: "閃電球",
    rune_content:
      "發射一定時間內即爆發的閃電球，每次爆發對周圍敵人造成閃電傷害",
    rune_img_url: "/img/rune/skill/blue/閃電球.jpg",
    link_url: "/rune/eletric_ball",
    rune_tag: ["咒文", "廣域", "打擊", "閃電", "投射體", "閃電球"],
    rune_limit: ["無法並列發射，無法分離，無法連鎖", "可使用所有武器"],
    rune_rank_effect: {
      magic: "觸電機率+10%<br>施展速度+5%",
      rare: "觸電機率+15%<br>施展速度+10%<br>廣域範圍+50",
      legend: "觸電機率+20%<br>施展速度+15%<br>廣域範圍+50",
    },
    rune_lv30: {
      consume: "20.5",
      value: "閃電傷害+248<br>閃電傷害248%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "summon_wrathful_rune_knight",
    rune_name_ch: "召喚憤怒符文騎士",
    rune_content:
      "召喚能定期使周圍深淵體強化，並能強化自身攻擊速度，造成物理傷害的符文騎士，召喚時需要付費",
    rune_img_url: "/img/rune/skill/blue/召喚憤怒符文騎士.jpg",
    link_url: "/rune/summon_wrathful_rune_knight",
    rune_tag: ["咒文", "僕從", "符文騎士", "召喚憤怒符文騎士"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "符文騎士生命力+30%<br>符文騎士傷害+50%",
      rare: "符文騎士生命力+75%<br>符文騎士傷害+100%",
      legend: "符文騎士生命力+125%<br>符文騎士傷害+150%",
    },
    rune_lv30: {
      consume: "待補",
      value: "待補",
    },
    sub_content: [
      {
        sub_content_title: "備註",
        rune_sub_content: "符文騎士具有打擊、廣域、物理、近距特性",
        img: [],
      },
    ],
    source: [],
  },
  {
    rune_name_en: "spell_protection_totem",
    rune_name_ch: "咒文保護圖騰",
    rune_content: "召喚能妨礙敵人使用咒文，並使傷害減幅的圖騰",
    rune_img_url: "/img/rune/skill/blue/咒文保護圖騰.jpg",
    link_url: "/rune/spell_protection_totem",
    rune_tag: ["咒文", "圖騰", "咒文保護圖騰"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "圖騰效果+8%",
      rare: "圖騰效果+16%<br>圖騰效果範圍+10%",
      legend: "圖騰效果+28%<br>圖騰效果範圍+20%",
    },
    rune_lv30: {
      consume: "54.8",
      value: "元素傷害減幅+15.1%",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "seal_of_condensed_elements",
    rune_name_ch: "凝聚元素紋章",
    rune_content: "使目標元素傷害增加",
    rune_img_url: "/img/rune/skill/blue/凝聚元素紋章.jpg",
    link_url: "/rune/seal_of_condensed_elements",
    rune_tag: ["咒文", "攻擊紋章", "切換", "凝聚元素紋章"],
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
    rune_name_en: "summon_twisted_abyssling",
    rune_name_ch: "召喚扭曲的深淵體",
    rune_content: "召喚能快速接近敵人並爆炸的深淵體，召喚時需要付費",
    rune_img_url: "/img/rune/skill/blue/召喚扭曲的深淵體.jpg",
    link_url: "/rune/summon_twisted_abyssling",
    rune_tag: ["咒文", "僕從", "深淵體", "召喚扭曲的深淵體"],
    rune_limit: ["無法連鎖", "可使用所有武器"],
    rune_rank_effect: {
      magic: "深淵體生命力+15%<br>僕從廣域範圍+10%<br>深淵體移動速度+10%",
      rare: "深淵體生命力+35%<br>僕從廣域範圍+20%<br>深淵體傷害15%增幅<br>深淵體移動速度+20%",
      legend:
        "深淵體生命力+70%<br>僕從廣域範圍+30%<br>深淵體傷害30%增幅<br>深淵體移動速度+30%",
    },
    rune_lv30: {
      consume: "待補",
      value: "待補",
    },
    sub_content: [
      {
        sub_content_title: "備註",
        rune_sub_content: "深淵體具有打擊、廣域、物理、近距特性",
        img: [],
      },
    ],
    source: [],
  },
  {
    rune_name_en: "seal_of_element_resist",
    rune_name_ch: "元素抵抗紋章",
    rune_content: "使目標所有元素抵抗增加",
    rune_img_url: "/img/rune/skill/blue/元素抵抗紋章.jpg",
    link_url: "/rune/seal_of_element_resist",
    rune_tag: ["咒文", "防禦紋章", "切換", "元素抵抗紋章"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "N/A",
      rare: "光環及紋章效果+30%",
      legend: "光環及紋章效果+60%",
    },
    rune_lv30: {
      consume: "20%",
      value: "元素抵抗力+20",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "blizzard",
    rune_name_ch: "暴風雪",
    rune_content:
      "在一定時間內於前方召喚出強力暴風雪，對敵人造成傷害。暴風雪的維持時間將受到施展速度的影響",
    rune_img_url: "/img/rune/skill/blue/暴風雪.jpg",
    link_url: "/rune/blizzard",
    rune_tag: ["咒文", "廣域", "打擊", "冰霜", "暴風雪"],
    rune_limit: ["無法多重發射，無法分離，無法連鎖", "可使用所有武器"],
    rune_rank_effect: {
      magic: "N/A",
      rare: "惡寒機率+18%<br>對處於惡寒狀態的敵人冰凍發生指數+20",
      legend:
        "惡寒機率+18%<br>對處於惡寒狀態的敵人冰凍發生指數+30<br>對處於惡寒狀態的敵人傷害+100%",
    },
    rune_lv30: {
      consume: "待補",
      value: "待補",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "wind_totem",
    rune_name_ch: "風圖騰",
    rune_content: "召喚可使我方攻擊速度、施展速度增加的圖騰",
    rune_img_url: "/img/rune/skill/blue/咒文保護圖騰.jpg",
    link_url: "/rune/wind_totem",
    rune_tag: ["咒文", "圖騰", "咒文保護圖騰"],
    rune_limit: ["無連結限制", "可使用所有武器"],
    rune_rank_effect: {
      magic: "圖騰效果+8%",
      rare: "圖騰效果+16%<br>圖騰效果範圍+10%",
      legend: "圖騰效果+28%<br>圖騰效果範圍+20%",
    },
    rune_lv30: {
      consume: "待補",
      value: "待補",
    },
    sub_content: [],
    source: [],
  },
  {
    rune_name_en: "seal_of_elemental_domain",
    rune_name_ch: "元素領域紋章",
    rune_content: "使目標的混沌抵抗增加",
    rune_img_url: "/img/rune/skill/blue/元素領域紋章.jpg",
    link_url: "/rune/seal_of_elemental_domain",
    rune_tag: ["咒文", "攻擊紋章", "切換", "元素領域紋章"],
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
    rune_name_en: "seal_of_pain",
    rune_name_ch: "痛苦紋章",
    rune_content: "使目標元素傷害增加",
    rune_img_url: "/img/rune/skill/blue/痛苦紋章.jpg",
    link_url: "/rune/seal_of_pain",
    rune_tag: ["咒文", "攻擊紋章", "切換", "痛苦紋章"],
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

  //   end
];
