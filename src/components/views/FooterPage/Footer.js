import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LOG_IN_REQUEST, LOG_OUT_REQUEST } from "../../../_reducers/index";
import { SUB_COLOR } from "../../config";
import { faHome, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Form from "antd/lib/form/Form";
import { Button, Input, message } from "antd";
import useInput from "../../../_hooks/useInput";
import useToggle from "../../../_hooks/useToggle";
import { CloseOutlined } from "@ant-design/icons";

const FooterWrapper = styled.div`
  padding: 1rem 0 0.5rem 0;
  width: 100%;
  height: 100px;
  background-color: #2a3b47;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  position: relative;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: white;
  &:hover {
    color: ${SUB_COLOR};
  }
`;

const LogInForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

const LogInModal = styled.div`
  border-radius: 5px;
  border: 1px solid white;
  padding: 1rem;
  width: 65%;
  height: 400px;
  background-color: #2a3b47;
  position: absolute;
  bottom: 110%;
  right: 50%;
  transform: translateX(50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 8px 21px 1px rgba(0, 0, 0, 0.5);
  @media (max-width: 992px) {
    width: 85%;
    font-size: 0.8rem;
  }
`;

function Footer() {
  const dispatch = useDispatch();
  const { user, logInDone, logInError } = useSelector((state) => state);

  const [name, onChangeName, setName] = useInput("");
  const [password, onChangePassword, setPassword] = useInput("");
  const [ModalOpend, onToggleModal, setModal] = useToggle(false);

  const onSubmit = useCallback(() => {
    if (!name || !password.trim()) {
      message.error("아무값도 입력하지 않았습니다.");
      return;
    }
    dispatch({
      type: LOG_IN_REQUEST,
      data: { name, password },
    });
    setName("");
    setPassword("");
  }, [dispatch, name, password, setName, setPassword]);

  useEffect(() => {
    if (logInError) {
      message.error("로그인 정보가 틀립니다. 다시 확인해주세요.");
    }
  }, [logInError]);
  useEffect(() => {
    if (logInDone) {
      setModal(false);
    }
  }, [logInDone, setModal]);

  const onClickLogOut = () => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  };
  return (
    <FooterWrapper>
      <div style={{ marginBottom: "1rem", textAlign: "center" }}>
        ⓒ 2021, Jang Hyun Soo. All Rights Resrved.
      </div>
      <ul
        style={{
          width: "280px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-end",
        }}
      >
        <li>
          <a
            style={{ marginRight: "1rem" }}
            href="https://github.com/noah071610"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon={faGithub} />
          </a>
          <a href="https://www.instagram.com/salmonchobab/" target="_blank" rel="noreferrer">
            <Icon icon={faInstagram} />
          </a>
        </li>
        {user ? (
          <li onClick={onClickLogOut} style={{ color: "white", cursor: "pointer" }}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
          </li>
        ) : (
          <li onClick={onToggleModal} style={{ color: "white", cursor: "pointer" }}>
            <FontAwesomeIcon icon={faHome} /> Admin
          </li>
        )}
      </ul>
      {ModalOpend ? (
        <LogInModal>
          <div style={{ position: "absolute", fontSize: "1.5rem", right: "0.5rem", top: "0.5rem" }}>
            <CloseOutlined onClick={onToggleModal} />
          </div>
          <div style={{ width: "100%", marginBottom: "0.5rem" }}>
            <h2 style={{ color: "white" }}>로그인 (관리자 전용)</h2>
            <h4 style={{ color: "white" }}>블로그관리를 위한 로그인로직</h4>
            <p style={{ textAlign: "start" }}>
              1️⃣Passport.js, MySql, Express, Axios, Redux-saga, cors 등 사용
              <br />
              2️⃣쿠키와 세션 이용한 로그인 지속 및 로그아웃기능 구현
              <br />
              3️⃣WYSIWYG editor외 multer, fs를 이용한 게시글 업로드 구현
              <br />
              4️⃣bcrypt, dotenv 그외 패스워드를 제외한 값을 가지고 오도록하여 보안 강화
            </p>
          </div>
          <LogInForm onFinish={onSubmit}>
            <Input value={name} onChange={onChangeName} maxLength={10} placeholder="Name" />
            <Input.Password
              value={password}
              onChange={onChangePassword}
              maxLength={140}
              placeholder="Password"
            />
            <Button style={{ width: "100%", fontSize: "0.7rem" }} type="primary" htmlType="submit">
              LOG IN (관리자 전용)
            </Button>
          </LogInForm>
        </LogInModal>
      ) : null}
    </FooterWrapper>
  );
}

export default Footer;
