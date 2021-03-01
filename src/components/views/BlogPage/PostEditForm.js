import { Button, Input, message } from "antd";
import Form from "antd/lib/form/Form";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import useInput from "../../../_hooks/useInput";
import { EDIT_POST_REQUEST, UPLOAD_IMAGES_REQUEST, EDIT_IAMGE_LOAD } from "../../../_reducers";
import Articles from "../_common/Articles";
import PageWrapper from "../_common/PageWrapper";

function PostForm({ match }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, imagePaths, post } = useSelector((state) => state);
  const [title, onChangeTitle, setTitle] = useInput("");
  const [content, onChangeContent, setContent] = useInput("");
  // eslint-disable-next-line no-unused-vars
  const [files, setFiles] = useState([]);
  const imageInput = useRef();

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, []);

  const onChangeImages = useCallback(
    (e) => {
      const imageFormData = new FormData();
      [].forEach.call(e.target.files, (file) => {
        imageFormData.append("image", file);
      });
      dispatch({
        type: UPLOAD_IMAGES_REQUEST,
        data: imageFormData,
      });
    },
    [dispatch]
  );

  const onSubmit = () => {
    if (!content || !content.trim()) {
      return alert("Write content!");
    }
    if (!title || !title.trim()) {
      return alert("Write title!");
    }
    const hashtag = post.Hashtags.map((v) => {
      return v.name;
    });
    const variables = {
      thumbnail: imagePaths[0],
      title,
      content,
      UserId: user.id,
      postId: post.id,
      tag: hashtag,
    };
    dispatch({
      type: EDIT_POST_REQUEST,
      data: variables,
    });
    message.success("수정완료!");
    history.push("/blog");
  };

  useEffect(() => {
    if (!user) {
      history.push("/blog");
    } else if (parseInt(match.params.id, 10) !== post.id) {
      history.push("/blog");
    } else if (user.id !== post.UserId) {
      history.push("/blog");
    } else {
      setTitle(post.title);
      setContent(post.content);
      dispatch({
        type: EDIT_IAMGE_LOAD,
        data: post.thumbnail,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <PageWrapper>
      <Articles title="Blog" sub={`'${post.title}' 포스트 수정`}>
        <div className="post_form">
          <h2>Thumbnail</h2>
          <input
            type="file"
            name="image"
            multiple
            hidden
            ref={imageInput}
            onChange={onChangeImages}
          />
          <Button onClick={onClickImageUpload}>Upload Image</Button>
          {imagePaths ? (
            <div style={{ margin: "1.5rem 0" }}>
              <img
                src={`http://localhost:5000/uploads/${imagePaths}`}
                style={{ width: "200px" }}
                alt={imagePaths}
              />
            </div>
          ) : null}
          <h2>Title</h2>
          <Input
            placeholder="Write down Title"
            value={title}
            onChange={onChangeTitle}
            style={{ width: "100%" }}
          />
          <h2>Edit Content</h2>
          <Input.TextArea value={content} onChange={onChangeContent} />
          <h2>Content</h2>
          <div
            style={{
              maxWidth: "720px",
              textAlign: "start",
            }}
            className="edit_form"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <Form encType="multipart/form-data" onFinish={onSubmit}>
            <Button style={{ margin: "1.5rem 0", width: "50%" }} htmlType="submit">
              EDIT POST
            </Button>
            <Button onClick={() => history.goBack()} style={{ margin: "1.5rem 0", width: "50%" }}>
              GO BACK
            </Button>
          </Form>
        </div>
      </Articles>
    </PageWrapper>
  );
}

export default PostForm;
