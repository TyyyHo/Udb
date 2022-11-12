import React from "react";
import "./page.scss";
import "./page_mobile.scss";

const Page = ({ data }) => {
  return (
    <>
      <div className="sub_container">
        {/* 主要內容 */}
        <div className="page_main">
          <div className="page_title">{data.page_title}</div>
          <div className="page_main_container">
            {/* 主要視覺圖片 */}
            <img
              className="page_main_img"
              src={data.page_main_img}
              alt={data.page_main_img_alt}
            />
            <div className="page_main_content">{data.page_main_content}</div>
          </div>
        </div>

        {/* 附加內容 */}
        {data.sub_content.map((item, index) => {
          return (
            <div className="page_sub" key={index}>
              <div className="page_sub_title">{item.sub_content_title}</div>
              <div className="page_sub_content">{item.page_sub_content}</div>
              <div className="img_frame">
                {item.img.map((t, inner_index) => {
                  return (
                    <div key={inner_index} className="page_img_container">
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
            {data.source.map((item, index) => {
              return <li key={index}>{item.content}</li>;
            })}
          </ol>
        </div>

        {/* end */}
      </div>
    </>
  );
};

export default Page;
