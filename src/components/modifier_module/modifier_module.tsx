import { useState } from "react"
import "./modifier_module.css"
import "./modifier_module_mobile.css"

type ModifierModuleProps = {
  data: any
}

const ModifierModule = ({ data }: ModifierModuleProps) => {
  const [subject, setSubject] = useState("alyssa")
  const pageBtnContent: any[] = data?.page_btn_content ?? []
  const currentModifiers: any[] = data?.[subject] ?? []
  const sources: any[] = data?.source ?? []

  return (
    <>
      <div className="sub_container">
        {/* 主要內容 */}
        <div className="page_main">
          <div className="page_title">{data.page_title}</div>

          {/* 類別切換鈕 */}
          {pageBtnContent.map((item: any, index: number) => {
            return (
              <button key={index} onClick={() => setSubject(item.type)}>
                {item.name}
              </button>
            )
          })}
        </div>

        {/* 附加內容 */}
        <div className="modifier_container">
          {currentModifiers.map((item: any, index: number) => {
            return (
              <div className="modifier" key={index}>
                <div className="modifier_title">{item.modifier}</div>
                <div className="modifier_content">
                  {item.value.map((i: string, index: number) => {
                    return <div key={index}>{i}</div>
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* 資料來源 */}
        <div className="page_sub">
          <div className="page_sub_title">資料參考/來源</div>
          <ol>
            {sources.map((item: any, index: number) => {
              return (
                <li key={index}>
                  <a href={item.url} target="_blank" rel="noreferrer noopener">
                    <span className="link_to_other_web"> {item.content}</span>
                  </a>
                </li>
              )
            })}
          </ol>
        </div>

        {/* end */}
      </div>
    </>
  )
}

export default ModifierModule
