import { Col } from "antd";
import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import dayjs from "dayjs";

dayjs.locale("kor");

const BlogCardWrapper = styled(Col)`
  margin-top: 1rem;
  padding: 0.5rem;
  text-align: start;
  position: relative;
  transition: all 0.3s;
  &:hover {
    box-shadow: 4px 5px 10px 1px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    img {
      opacity: 0.6;
    }
  }
`;

const BlogCardContent = styled.div`
  padding: 1rem;

  .blogCard_title_sub {
    font-size: 0.7rem;
  }

  &:hover {
    .blogCard_title_main,
    .blogCard_title_sub {
      text-decoration: underline;
    }
  }
`;

function BlogCard({ id, title, content, thumbnail, hashtags, date }) {
  const history = useHistory();
  const content_sub = content.replace(/(<([^>]+)>)/gi, "").slice(0, 15) + "...";
  function BlogCardClickHandler(e) {
    if (e.target.nodeName === "A") {
      return;
    }
    history.push(`/blog/post/${id}`);
  }
  return (
    <>
      <BlogCardWrapper className="BlogCardWrapper" onClick={BlogCardClickHandler} xs={24} sm={12}>
        <img
          style={{
            transition: "all 0.3s",
            width: "100%",
            height: "200px",
            borderRadius: "5px",
          }}
          src={thumbnail ? `http://localhost:5000/uploads/${thumbnail}` : "/images/noImage.jpg"}
          alt={thumbnail ? thumbnail : "no image"}
        />
        <BlogCardContent>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h3 className="blogCard_title_main" style={{ margin: "0" }}>
              {title}
            </h3>
            <span className="date" style={{ fontSize: "0.8rem" }}>
              {dayjs(date).format("YYYY.MM.DD")}
            </span>
          </div>
          <div className="blogCard_title_sub">{content_sub}</div>
          <ul style={{ marginBottom: 0 }}>
            {hashtags &&
              hashtags.map((v, i) => {
                return (
                  <li key={i}>
                    <Link to={`/blog/hashtag/${v.name}`} className="tag">
                      #{v.name}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </BlogCardContent>
      </BlogCardWrapper>
    </>
  );
}

export default BlogCard;
