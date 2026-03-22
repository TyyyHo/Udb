import { useState } from "react"
import "./essence_page.css"
import "./essence_page_mobile.css"

type EssencePageProps = {
  data: any
}

const EssencePage = ({ data }: EssencePageProps) => {
  const [subject, setSubject] = useState("一般版本")
  const pageBtnContent: string[] = data?.page_btn_content ?? []
  const subContent: any[] = data?.sub_content ?? []
  const sources: any[] = data?.source ?? []

  return (
    <>
      <div className="sub_container">
        {/* 主要內容 */}
        <div className="page_main">
          <div className="page_title">{data.page_title}</div>

          {/* 類別切換鈕 */}
          {pageBtnContent.map((item: string, index: number) => {
            return (
              <button key={index} onClick={() => setSubject(item)}>
                {item}
              </button>
            )
          })}
        </div>

        {/* 附加內容 */}
        <div className="page_form_container">
          <table>
            <tbody>
              <tr>
                <th>圖示</th>
                <th>精華名稱</th>
                <th className={subject}>精華別稱</th>
                <th>精華效果</th>
              </tr>
              {subContent.map((item: any, index: number) => {
                return (
                  <tr key={index}>
                    <td className="img_container">
                      <img src={item.essence_url} alt="" />
                    </td>
                    <td className="essence_content">{item.essence_name}</td>
                    <td className={`${subject}  essence_content`}>
                      {item.essence_nickname}
                    </td>
                    <td className="essence_effect">{item.essence_effect}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
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

export default EssencePage
