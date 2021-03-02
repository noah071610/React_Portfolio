import { EditFilled } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { REMOVE_POST_REQUEST, REMOVE_POST_ROLLBACK } from "../../../../_reducers";
import { useHistory } from "react-router";
import { message } from "antd";

const EditIcon = styled(EditFilled)`
  font-size: 1.3rem;
  cursor: pointer;
  &:hover {
    color: red;
    opacity: 0.5;
  }
`;

const TrashIcon = styled(FontAwesomeIcon)`
  font-size: 1.3rem;
  cursor: pointer;
  &:hover {
    color: red;
    opacity: 0.5;
  }
`;

function BlogPostNavigation() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { post, user, removePostDone } = useSelector((state) => state);

  const onClickRemove = () => {
    const confirm = window.confirm("정말 삭제하시겠어요?");
    if (confirm) {
      if (!user) {
        if (!user) {
          message.warning("로그인이 필요합니다!");
          return;
        }
      }
      if (post.UserId !== user.id) {
        message.warning("남의 게시물을 수정할 수 없어요 😢");
      } else {
        const hashtag = post.Hashtags.map((v) => {
          return v.name;
        });
        dispatch({
          type: REMOVE_POST_REQUEST,
          data: { postId: post.id, tag: hashtag },
        });
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    if (removePostDone) {
      history.push("/blog");
      message.success("삭제 완료!");
      dispatch({
        type: REMOVE_POST_ROLLBACK,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [removePostDone]);

  const onClickEdit = () => {
    if (!user) {
      message.warning("로그인이 필요합니다!");
      return;
    }
    if (post.UserId !== user.id) {
      message.warning("남의 게시물을 수정할 수 없어요 😢");
    } else {
      history.push(`/blog/edit/${post.id}`);
    }
  };

  return (
    <ul style={{ display: "flex" }}>
      <li style={{ marginRight: "0.8rem" }}>
        <EditIcon onClick={onClickEdit} />
      </li>
      <li style={{ marginRight: "0.8rem" }}>
        <TrashIcon onClick={onClickRemove} icon={faTrashAlt} />
      </li>
    </ul>
  );
}

export default BlogPostNavigation;
