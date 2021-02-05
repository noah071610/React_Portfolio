import React, { useState } from "react";
import {
  faAddressCard,
  faBlog,
  faEnvelope,
  faImages,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { GRAY_COLOR, MAIN_COLOR, SUB_COLOR } from "../config";
import { Popover } from "antd";
import "antd/dist/antd.css";

const Nav = styled.nav`
  width: 90%;
  height: 50px;
  display: grid;
  grid-template-columns: 5fr 1fr 1fr 1fr 1fr;
  margin: 3rem 0;
  border-top: 2px solid ${GRAY_COLOR};
  border-bottom: 2px solid ${GRAY_COLOR};
`;

const Ang = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid white;
  transition: 0.3s;
  color: black;
  &:hover {
    background: ${SUB_COLOR};
    color: white;
  }
`;

function Navigation() {
  const [Contents, setContents] = useState([
    { name: faAddressCard, content: "Introduce me 😄", explain: "About me" },
    { name: faLaptop, content: "Know about my skill-set 👨‍💼" },
    { name: faImages, content: "Teste my portfolio 🖼️" },
    { name: faBlog, content: "Come to my blog ✏️" },
    { name: faEnvelope, content: "Are you interested in me? 📭" },
  ]);
  const [Active, setActive] = useState(false);
  return (
    <>
      <Nav>
        {Contents.map((v, i) => (
          <Popover key={i} placement="topLeft" content={v.content}>
            <Ang>
              <FontAwesomeIcon icon={v.name} />
              {v.explain ? <span style={{ marginLeft: "1rem" }}>{v.explain}</span> : null}
            </Ang>
          </Popover>
        ))}
      </Nav>
    </>
  );
}

export default Navigation;
