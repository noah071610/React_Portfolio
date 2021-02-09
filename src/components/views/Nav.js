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
import Col from "antd/lib/col";
import Popover from "antd/lib/popover";
import Row from "antd/lib/row";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";

const NavLink = styled(Link)`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transition: 0.3s;
  color: black;
  &:hover {
    background: ${SUB_COLOR};
    color: white;
  }
`;

function Navigation() {
  const [FixedNavbar, setFixedNavbar] = useState(false);
  const [Selected, setSelected] = useState(0);

  useEffect(() => {
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.scrollY > 493) {
        setFixedNavbar(true);
      } else {
        setFixedNavbar(false);
      }
    });
    window.addEventListener("scroll", scrollCallBack);
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  const contents = [
    { name: faAddressCard, content: "Introduce me 😄", explain: "About me", link: "/" },
    { name: faLaptop, content: "Know about my skill-set 👨‍💼", explain: "Skills", link: "/skills" },
    { name: faImages, content: "Teste my portfolio 🖼️", explain: "Portfolio", link: "/portfolio" },
    { name: faBlog, content: "Come to my blog ✏️", explain: "My Blog", link: "/blog" },
    {
      name: faEnvelope,
      content: "Are you interested in me? 📭",
      explain: "Contact",
      link: "/contact",
    },
  ];
  return (
    <>
      <Row className={FixedNavbar ? "nav_sticky" : "nav_header"}>
        {contents.map((v, i) => (
          <Popover key={i} placement={FixedNavbar ? "bottomRight" : "topLeft"} content={v.content}>
            <Col
              data-value={i}
              span={i === Selected ? 8 : 4}
              onClick={() => setSelected(i)}
              style={{ transition: "0.3s" }}
            >
              <NavLink
                style={
                  i === Selected
                    ? {
                        borderBottom: `1px solid ${SUB_COLOR}`,
                      }
                    : {}
                }
                to={v.link}
              >
                <FontAwesomeIcon icon={v.name} />
                {i === Selected ? <span style={{ marginLeft: "1rem" }}>{v.explain}</span> : null}
              </NavLink>
            </Col>
          </Popover>
        ))}
      </Row>
    </>
  );
}

export default Navigation;
