import { Link } from "react-router-dom"
import { assetUrl } from "../../utils/asset_url"

type RuneItem = {
  rune_tag: string[]
  link_url: string
  rune_img_url: string
  rune_name_ch: string
  rune_name_en: string
}

type BoxModuleProps = {
  className: string
  rune_data: RuneItem[]
  filter_bar: string
  language: "ch" | "en"
}

const BoxModule = ({
  className,
  rune_data,
  filter_bar,
  language,
}: BoxModuleProps) => {
  const filterByTag = (rune: RuneItem): boolean => {
    // 搜尋字串轉陣列
    const filterBarArray = filter_bar.split(" ").filter(Boolean)
    // 資料tag轉字串
    const tag = rune.rune_tag.join("")
    // 搜尋欄若為空字串，return所有技能
    if (filter_bar === "") {
      return true
    }

    // 搜尋陣列中，有符合tag的技能就return
    return filterBarArray.every(arrEle => tag.indexOf(arrEle) >= 0)
  }

  return (
    <div className={className}>
      {rune_data
        .filter(rune => {
          return filterByTag(rune)
        })
        .map((item, index) => {
          return (
            <Link className="rune_box" key={index} to={item.link_url}>
              <img
                src={assetUrl(item.rune_img_url)}
                alt="rune_img"
                className={String(index)}
              />
              {
                {
                  ch: (
                    <span className="rune_box_name">{item.rune_name_ch}</span>
                  ),
                  en: (
                    <span className="rune_box_name">
                      {item.rune_name_en.replaceAll("_", " ")}
                    </span>
                  ),
                }[language]
              }
            </Link>
          )
        })}
    </div>
  )
}

export { BoxModule }
