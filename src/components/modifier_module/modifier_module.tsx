import React from "react";
import { useState } from "react";
import "./modifier_module.scss";
import "./modifier_module_mobile.scss";

const Modifier_module = ({ data }) => {
  const [subject, set_subject] = useState("alyssa");
  return (
    <>
      <div className="sub_container">
        {/* 主要內容 */}
        <div className="page_main">
          <div className="page_title">{data.page_title}</div>

          {/* 類別切換鈕 */}
          {data.page_btn_content.map((item, index) => {
            return (
              <button key={index} onClick={() => set_subject(item.type)}>
                {item.name}
              </button>
            );
          })}
        </div>

        {/* 附加內容 */}
        <div className="modifier_container">
          {data[subject].map((item, index) => {
            return (
              <div className="modifier" key={index}>
                <div className="modifier_title">{item.modifier}</div>
                <div className="modifier_content">
                  {item.value.map((i, index) => {
                    return <div key={index}>{i}</div>;
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* 資料來源 */}
        <div className="page_sub">
          <div className="page_sub_title">資料參考/來源</div>
          <ol>
            {data.source.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.url} target="_blank" rel="noreferrer noopener">
                    <span className="link_to_other_web"> {item.content}</span>
                  </a>
                </li>
              );
            })}
          </ol>
        </div>

        {/* end */}
      </div>
    </>
  );
};

export default Modifier_module;
