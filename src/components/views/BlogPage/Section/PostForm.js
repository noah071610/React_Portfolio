import { Button, Input } from "antd";
import Form from "antd/lib/form/Form";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useInput from "../../../../_hooks/useInput";
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE } from "../../../../_reducers";
import { GRAY_COLOR } from "../../../config";
import QuillEditor from "../../../editor/QuillEditor";

function PostForm() {
  const dispatch = useDispatch();
  const { user, imagePaths, addPostDone } = useSelector((state) => state);
  const [content, setContent] = useState("");
  const [title, onChangeTitle, setTitle] = useInput("");
  // eslint-disable-next-line no-unused-vars
  const [files, setFiles] = useState([]);
  const imageInput = useRef();

  useEffect(() => {
    if (addPostDone) {
      setTitle("");
    }
  }, [addPostDone, setTitle]);

  useEffect(() => {
    if (addPostDone) {
      dispatch({
        type: REMOVE_IMAGE,
      });
    }
  }, [addPostDone, dispatch]);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, []);

  const onEditorChange = (value) => {
    setContent(value);
  };

  const onFilesChange = (files) => {
    setFiles(files);
  };

  const onChangeImages = useCallback(
    (e) => {
      const imageFormData = new FormData();
      [].forEach.call(e.target.files, (file) => {
        imageFormData.append("image", file);
      });
      dispatch({
        type: UPLOAD_IMAGES_REQUEST,
        data: imageFormData,
      }); // 미리 이미지를 서버에 보내는 행위
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
    const variables = {
      thumbnail: imagePaths[0],
      title,
      content,
      UserId: user.id,
    };
    setContent("");
    setTitle("");
    return dispatch({
      type: ADD_POST_REQUEST,
      data: variables,
    });
  };
  return (
    <div className="post_form">
      <div style={{ width: "100%", height: "1px", backgroundColor: GRAY_COLOR }}></div>
      <br />
      <h2>Thumbnail</h2>
      <input type="file" name="image" multiple hidden ref={imageInput} onChange={onChangeImages} />
      <Button onClick={onClickImageUpload}>Upload Image</Button>

      {imagePaths
        ? imagePaths.map((v, i) => (
            <div key={v} style={{ margin: "1.5rem 0" }}>
              <img src={`http://localhost:5000/uploads/${v}`} style={{ width: "200px" }} alt={v} />
            </div>
          ))
        : null}
      <h2>Title</h2>
      <Input
        placeholder="Write down Title"
        value={title}
        onChange={onChangeTitle}
        style={{ width: "100%" }}
      />
      <h2>Content</h2>
      <QuillEditor
        placeholder={"Write down contents"}
        onEditorChange={onEditorChange}
        onFilesChange={onFilesChange}
      />
      <Form encType="multipart/form-data" onFinish={onSubmit}>
        <Button style={{ margin: "1.5rem 0", width: "50%" }} type="primary" htmlType="submit">
          addPost
        </Button>
      </Form>
    </div>
  );
}

export default PostForm;
