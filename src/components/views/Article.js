import React from "react";
import { Row, Col } from "antd";
import ArticleNav from "./ArticleNav";

function Article() {
  return (
    <>
      <ArticleNav />
      <div
        style={{
          width: "90%",
          height: "700px",
          borderRadius: "5px",
          border: "2px solid rgba(0,0,0,0.1)",
          boxShadow: "3px 1px 1px rgba(0,0,0,0.1)",
          marginBottom: "1.5rem",
          borderTopLeftRadius: "0",
          textAlign: "center",
        }}
      >
        dd
      </div>
    </>
  );
}

export default Article;
