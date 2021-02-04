import React from "react";

function ArticleNav() {
  return (
    <div
      style={{
        width: "90%",
        height: "30px",
        display: "flex",
        justifyContent: "flex-start",
        zIndex: "1",
      }}
    >
      <div
        style={{
          width: "20%",
          border: "2px solid rgba(0,0,0,0.1)",
          borderBottom: "none",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
          boxShadow: "0px 2px 0px white",
          textAlign: "center",
        }}
      >
        ddda
      </div>
      <div
        style={{
          width: "20%",
          border: "2px solid rgba(0,0,0,0.1)",
          borderBottom: "none",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
        }}
      >
        b
      </div>
      <div
        style={{
          width: "20%",
          border: "2px solid rgba(0,0,0,0.1)",
          borderBottom: "none",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
        }}
      >
        c
      </div>
    </div>
  );
}

export default ArticleNav;
