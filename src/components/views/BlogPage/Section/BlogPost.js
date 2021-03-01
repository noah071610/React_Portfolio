/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PageWrapper from "../../_common/PageWrapper";
import { useSelector, useDispatch } from "react-redux";
import { LOAD_POST_REQUEST } from "../../../../_reducers";
import { Link, useHistory } from "react-router-dom";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import BlogPostPageArrow from "./BlogPostPageArrow";
import BlogPostNavigation from "./BlogPostNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { GRAY_COLOR } from "../../../config";
dayjs.extend(relativeTime);
dayjs.locale("kor");

const List = styled.li`
  transition: all 0.3s;
  &:hover {
    opacity: 0.5;
  }
`;

const Thumbnail = styled.img`
  margin: 4rem 0;
  max-width: 700px;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.15);
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

const PostContainer = styled.div`
  position: relative;
  text-align: start;
  padding: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
`;

function BlogPost({ match }) {
  const id = match.params.id;
  const history = useHistory();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state);
  const [Fullcontent, setFullcontent] = useState("");

  useEffect(() => {
    dispatch({
      type: LOAD_POST_REQUEST,
      data: id,
    });
  }, [dispatch, id]);

  useEffect(() => {
    const tagContent =
      post &&
      post.content.split(/(#[^\s#+^<]+)/g).map((v, i) => {
        if (v.match(/(#[^\s#+^<]+)/g)) {
          return `<span class="marker">${v}</span>`;
        }
        return v;
      });
    const fullContentRemoveComma = post && tagContent.join("");
    setFullcontent(fullContentRemoveComma);
  }, [post]);

  return (
    <PageWrapper>
      <div className="div_space" />
      <PostContainer>
        {post && (
          <>
            <h2 style={{ margin: 0, width: "100%", fontSize: "2.5rem" }}>{post && post.title}</h2>
            <div
              className="divider"
              style={{ margin: "1rem 0 1.5rem 0", width: "80%", height: "1px" }}
            />
            <ul style={{ display: "flex", alignItems: "center", marginBottom: 0 }}>
              <List>
                <a onClick={() => history.push("/blog")}>블로그홈</a>
              </List>
              <FontAwesomeIcon
                icon={faCircle}
                style={{ fontSize: "0.3rem", margin: "0 0.3rem", color: GRAY_COLOR }}
              />
              <List>
                <a>
                  {post.User.name}`s{post.id} post
                </a>
              </List>
              <FontAwesomeIcon
                icon={faCircle}
                style={{ fontSize: "0.3rem", margin: "0 0.3rem", color: GRAY_COLOR }}
              />
              <List>
                <span className="date">
                  {dayjs().to(dayjs(post.createdAt), true)}
                  &nbsp;ago
                </span>
              </List>
            </ul>
            <ul style={{ marginBottom: "0" }}>
              {post.Hashtags.map((v, i) => {
                return (
                  <Link to={`/blog/hashtag/${v.name}`} key={i} className="tag">
                    #{v.name}
                  </Link>
                );
              })}
            </ul>
            <Thumbnail
              src={`http://localhost:5000/uploads/${post.thumbnail}`}
              alt={post.thumbnail}
            />
          </>
        )}
        {post && (
          <div
            style={{
              maxWidth: "720px",
            }}
            dangerouslySetInnerHTML={{ __html: Fullcontent }}
          />
        )}
        <div className="divider" style={{ marginTop: "4rem", width: "100%", height: "1px" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1.5rem 0",
          }}
        >
          <h3 style={{ margin: 0 }}>이글이 도움이 되었나요?</h3>
          <BlogPostNavigation />
        </div>
        <BlogPostPageArrow />
      </PostContainer>
    </PageWrapper>
  );
}

export default BlogPost;
