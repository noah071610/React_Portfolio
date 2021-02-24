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
import Row from "antd/lib/row";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PAGE_CHANGE } from "../../_reducers";

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

const Navigation = () => {
  const dispatch = useDispatch();
  const [FixedNavbar, setFixedNavbar] = useState(false);
  const { pageNumber } = useSelector((state) => state);

  const onClickHandler = (i) => {
    dispatch({
      type: PAGE_CHANGE,
      pageNumber: i,
      posterName: contents[i].name,
    });
    if (window.scrollY > 493) {
      window.scrollTo({
        top: 0,
      });
    }
  };

  useEffect(() => {
    function scrollCallBack() {
      if (window.scrollY > 493) {
        setFixedNavbar(true);
      } else {
        setFixedNavbar(false);
      }
    }
    window.addEventListener("scroll", scrollCallBack);
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  const contents = [
    { icon: faAddressCard, content: "Introduce me 😄", explain: "About me", name: "aboutme" },
    {
      icon: faLaptop,
      content: "Know about my skill-set 👨‍💼",
      explain: "Skills",
      name: "skills",
    },
    {
      icon: faImages,
      content: "Teste my portfolio 🖼️",
      explain: "Portfolio",
      name: "portfolio",
    },
    { icon: faBlog, content: "Come to my blog ✏️", explain: "My Blog", name: "blog" },
    {
      icon: faEnvelope,
      content: "Are you interested in me? 📭",
      explain: "Contact",
      name: "contact",
    },
  ];

  return (
    <>
      <Row className={FixedNavbar ? "nav_sticky" : "nav_header"}>
        {contents.map((v, i) => (
          <Col
            key={i}
            data-value={i}
            span={i === pageNumber ? 8 : 4}
            onClick={() => onClickHandler(i)}
            style={{ transition: "0.3s" }}
          >
            <NavLink
              style={
                i === pageNumber
                  ? {
                      borderBottom: `1px solid ${SUB_COLOR}`,
                    }
                  : null
              }
              to={v.name === "aboutme" ? "/" : `/${v.name}`}
            >
              <FontAwesomeIcon icon={v.icon} />
              {i === pageNumber && <span style={{ marginLeft: "1rem" }}>{v.explain}</span>}
            </NavLink>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Navigation;
