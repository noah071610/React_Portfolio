import Col from "antd/lib/col";
import Row from "antd/lib/row";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Articles from "../_common/Articles";
import PageWrapper from "../_common/PageWrapper";
import BlogCard from "./Section/BlogCard";
import { LOAD_HASHTAG_POSTS_REQUEST } from "../../../_reducers";
import { Link } from "react-router-dom";

function BlogHashtagPage({ match }) {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state);
  const hashtag = match.params.name;
  useEffect(() => {
    dispatch({
      type: LOAD_HASHTAG_POSTS_REQUEST,
      data: hashtag,
    });
  }, [dispatch, hashtag]);

  return (
    <PageWrapper>
      <Articles title="Blog" sub="기억보단 기록을">
        <Row style={{ marginBottom: "1.5rem", textAlign: "start" }}>
          <Col span={24}>
            검색 태그명 👉{" "}
            {posts && (
              <>
                <span className="tag">#{hashtag}</span>
                <Link to={"/blog"} className="tag">
                  #전체보기
                </Link>
              </>
            )}
          </Col>
        </Row>
        <Row gutter={10}>
          {posts &&
            posts.map((post, index) => {
              return (
                <BlogCard
                  key={index}
                  id={post.id}
                  title={post.title}
                  content={post.content}
                  thumbnail={post.thumbnail}
                  hashtags={post.Hashtags}
                  date={post.createdAt}
                />
              );
            })}
        </Row>
      </Articles>
    </PageWrapper>
  );
}

export default BlogHashtagPage;
