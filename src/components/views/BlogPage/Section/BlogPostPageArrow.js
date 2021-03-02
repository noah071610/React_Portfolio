import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PaginateBtn = styled(Link)`
  display: flex;
  align-items: center;
  width: 50%;
  height: 150px;
  justify-content: ${(props) => (props.side === "left" ? "flex-start" : "flex-end")};
  position: relative;
  cursor: pointer;
  .paginate_img {
    width: 40%;
    height: 100%;
  }
  .btn_title {
    padding: 0 1.5rem;
  }
  @media only screen and (max-width: 992px) {
    display: block;
    height: 100%;
    .btn_title {
      font-size: 0.7rem;
      padding: 0.5rem;
    }
    .paginate_main {
      font-size: 1rem;
    }
    .paginate_img {
      width: 100%;
      height: 50%;
      margin: 0 auto;
    }
  }
`;

function BlogPostPageArrow() {
  const { prevPost, nextPost } = useSelector((state) => state);
  return (
    <div style={{ display: "flex", marginTop: "1.5rem" }}>
      {prevPost ? (
        <PaginateBtn className="paginateBtn" side="left" to={`/blog/post/${prevPost.id}`}>
          <img
            className="paginate_img"
            src={
              prevPost.thumbnail
                ? `http://localhost:5000/uploads/${prevPost.thumbnail}`
                : "/images/noImage.jpg"
            }
            alt={prevPost.thumbnail ? prevPost.thumbnail : "no-Image"}
          />
          <div className="btn_title">
            <h2 className="paginate_main">{prevPost.title.slice(0, 10) + ".."}</h2>
            <p style={{ display: "inline-block", width: "100%" }}>
              {prevPost.content.replace(/(<([^>]+)>)/gi, "").slice(0, 20) + ".."}
            </p>
          </div>
        </PaginateBtn>
      ) : (
        <div style={{ width: "50%" }} />
      )}
      {nextPost ? (
        <PaginateBtn className="paginateBtn" side="left" to={`/blog/post/${nextPost.id}`}>
          <img
            className="paginate_img"
            src={
              nextPost.thumbnail
                ? `http://localhost:5000/uploads/${nextPost.thumbnail}`
                : "/images/noImage.jpg"
            }
            alt={nextPost.thumbnail ? nextPost.thumbnail : "no Image"}
          />
          <div className="btn_title">
            <h2>{nextPost.title.slice(0, 10) + ".."}</h2>
            <p style={{ display: "inline-block", width: "100%" }}>
              {nextPost.content.replace(/(<([^>]+)>)/gi, "").slice(0, 20) + ".."}
            </p>
          </div>
        </PaginateBtn>
      ) : (
        <div style={{ width: "50%" }} />
      )}
    </div>
  );
}

export default BlogPostPageArrow;
