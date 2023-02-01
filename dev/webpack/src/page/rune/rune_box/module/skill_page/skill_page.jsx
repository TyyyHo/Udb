import React from "react";
import { useParams } from "react-router-dom";
import "./skill_page.scss";

// data
import { combined_data_skill } from "../../skill_data/combined_data_skill";

const Skill_page = () => {
  // 網址參數
  let { rune_name } = useParams();
  // 選取相符資料
  let matched_data = combined_data_skill.filter((item) => {
    return item.rune_name_en == rune_name;
  })[0];
  return (
    <div className="main_container">
      <div className="sub_container">
        {/* 主要內容 */}
        <div className="skill_page_main">
          <div className="page_title">{matched_data.rune_name_ch}</div>
          <div className="page_main_container">
            {/* 主要視覺圖片 */}
            <img
              className="page_main_img"
              src={matched_data.rune_img_url}
              alt="page_main_img"
            />

            {/* rune標籤 */}
            <div className="page_rune_contanier">
              <div className="page_rune_tag_contanier">
                {matched_data.rune_tag.map((item, index) => {
                  return (
                    <span className="page_rune_tag" key={index}>
                      {item}
                    </span>
                  );
                })}
              </div>
              <div className="page_rune_limit_contanier">
                {matched_data.rune_limit.map((item, index) => {
                  return (
                    <div className="page_rune_limit" key={index}>
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 主要內容 */}
            <div className="page_main_content">{matched_data.rune_content}</div>

            {/* 階級效果 */}
            <div className="page_skill_rank_container">
              <table>
                <tbody className="page_skill_rank">
                  <tr>
                    <td className="magic_rune">魔法</td>
                    <td
                      dangerouslySetInnerHTML={{
                        __html: matched_data.rune_rank_effect.magic,
                      }}
                      className="magic_rune"
                    ></td>
                  </tr>
                  <tr>
                    <td className="rare_rune">稀有</td>
                    <td
                      dangerouslySetInnerHTML={{
                        __html: matched_data.rune_rank_effect.rare,
                      }}
                      className="rare_rune"
                    ></td>
                  </tr>
                  <tr>
                    <td className="legend_rune">傳說</td>
                    <td
                      dangerouslySetInnerHTML={{
                        __html: matched_data.rune_rank_effect.legend,
                      }}
                      className="legend_rune"
                    ></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 附加內容 */}
        {matched_data.sub_content.map((item, index) => {
          return (
            <div className="page_sub" key={index}>
              <div className="page_sub_title">{item.sub_content_title}</div>
              <div className="page_sub_content">{item.rune_sub_content}</div>
              <div className="img_frame">
                {item.img.map((t, index) => {
                  return (
                    <div className="page_img_container" key={index}>
                      <img className="page_sub_img" src={t.url} alt="img" />
                      <div className="img_description">{t.description}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* 資料來源 */}
        <div className="page_source page_sub">
          <div className="page_source_title page_sub_title">資料參考/來源</div>
          <ol>
            {matched_data.source.map((item, index) => {
              return <li key={index}> {item.content}</li>;
            })}
          </ol>
        </div>

        {/* end */}
      </div>
    </div>
  );
};

export default Skill_page;
