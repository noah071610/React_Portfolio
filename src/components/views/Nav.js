import React, { useEffect, useState } from "react";
import {
  faAddressCard,
  faBlog,
  faEnvelope,
  faImages,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { SUB_COLOR } from "../config";
import { Col, Popover, Row } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";

const NavLink = styled(Link)`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  transition: 0.3s;
  color: black;
  &:hover {
    background: ${SUB_COLOR};
    color: white;
  }
`;

function Navigation() {
  const contents = [
    { name: faAddressCard, content: "Introduce me 😄", explain: "About me", link: "/" },
    { name: faLaptop, content: "Know about my skill-set 👨‍💼", link: "/skills" },
    { name: faImages, content: "Teste my portfolio 🖼️", link: "/portfolio" },
    { name: faBlog, content: "Come to my blog ✏️", link: "/blog" },
    { name: faEnvelope, content: "Are you interested in me? 📭", link: "/contact" },
  ];
  const [Navbar, setNavbar] = useState(false);

  useEffect(() => {
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.scrollY > 493) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    });
    window.addEventListener("scroll", scrollCallBack);
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  return (
    <>
      <Row className={Navbar ? "nav_sticky" : "nav_header"}>
        {contents.map((v, i) => (
          <Popover key={i} placement={Navbar ? "bottomRight" : "topLeft"} content={v.content}>
            <Col span={i === 0 ? 8 : 4}>
              <NavLink to={v.link}>
                <FontAwesomeIcon icon={v.name} />
                {v.explain ? <span style={{ marginLeft: "1rem" }}>{v.explain}</span> : null}
              </NavLink>
            </Col>
          </Popover>
        ))}
      </Row>
    </>
  );
}

export default Navigation;
