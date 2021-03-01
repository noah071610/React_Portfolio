import Col from "antd/lib/col";
import Row from "antd/lib/row";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Articles from "../_common/Articles";
import PageWrapper from "../_common/PageWrapper";
import BlogCard from "./Section/BlogCard";
import { LOAD_POSTS_REQUEST } from "../../../_reducers";
import PostForm from "./Section/PostForm";
import { Link, useHistory } from "react-router-dom";
import { Button, Input, Pagination } from "antd";
import useToggle from "../../../_hooks/useToggle";

const { Search } = Input;

function BlogPage({ match }) {
  const dispatch = useDispatch();
  const { hashtags, hasMorePosts, posts, user } = useSelector((state) => state);
  const [Serach, setSerach] = useState(posts);
  const [current, setCurrent] = useState(0);
  const [onPageSetBtn, setOnPageSetBtn] = useState(false);
  const [postOn, postToggle] = useToggle(false);
  const hashtag = match.params.name;
  const history = useHistory();
  const setFirstPage = () => {
    setCurrent(0);
    onChangePage(1);
  };

  const postsPerPage = 6;
  const pagesVisited = current * postsPerPage;
  const displayPosts = (posts) => {
    let slicePosts = posts.slice(pagesVisited, pagesVisited + postsPerPage);
    return slicePosts.map((post, index) => (
      <BlogCard
        key={index}
        id={post.id}
        title={post.title}
        content={post.content}
        thumbnail={post.thumbnail}
        hashtags={post.Hashtags}
        date={post.createdAt}
      />
    ));
  };

  const onSearch = (value) => {
    setFirstPage();
    if (value === "") {
      setSerach(posts);
    }
    let keyword = posts.filter((post) => {
      return post.content.indexOf(value) > -1;
    });
    setSerach(keyword);
    setOnPageSetBtn(true);
  };

  const onChangePage = (page) => {
    setCurrent(page - 1);
    if (page === 1) {
      history.push(`/blog`);
    } else {
      history.push(`/blog/${page}`);
    }
    window.scrollTo({
      top: 0,
    });
  };

  const onClickAllPosts = (posts) => {
    setFirstPage();
    setSerach(posts);
    setOnPageSetBtn(false);
  };

  useEffect(() => {
    if (hasMorePosts) {
      dispatch({
        type: LOAD_POSTS_REQUEST,
      });
    }
    setSerach(posts);
  }, [dispatch, hasMorePosts, hashtag, posts]);

  useEffect(() => {
    if (match.params.page) {
      setCurrent(match.params.page - 1);
      onChangePage(match.params.page);
    } else {
      setFirstPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.page]);

  return (
    <PageWrapper>
      <Articles title="Blog" sub="기억보단 기록을">
        <Row style={{ marginBottom: "1.5rem", textAlign: "start" }}>
          <Col style={{ marginBottom: "1rem", display: "flex" }} xs={24} lg={18}>
            <Search placeholder="검색" onSearch={onSearch} style={{ width: "100%" }} />
            {onPageSetBtn ? (
              <Button onClick={() => onClickAllPosts(posts)}>처음페이지로</Button>
            ) : null}
          </Col>
          <Col span={24}>
            {hashtags &&
              hashtags.map((v, i) => {
                return (
                  <Link key={i} to={`/blog/hashtag/${v.name}`} className="tag">
                    #{v.name}
                  </Link>
                );
              })}
          </Col>
        </Row>
        <Row gutter={20}>{posts && displayPosts(Serach)}</Row>
        <Pagination
          style={{ margin: "3rem 0 1rem 0" }}
          onChange={onChangePage}
          defaultCurrent={1}
          current={current + 1}
          total={posts.length + postsPerPage}
        />
      </Articles>
      {user && (
        <Button onClick={postToggle} style={{ marginBottom: "3rem" }}>
          {postOn ? "Close Post Form" : "Open Post Form"}
        </Button>
      )}
      {postOn ? <PostForm /> : null}
    </PageWrapper>
  );
}

export default BlogPage;
