import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { SUB_COLOR } from "../../config";
import Col from "antd/lib/col";
import Row from "antd/lib/row";
import "antd/dist/antd.css";
import { navContents } from "../../config";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PAGE_CHANGE } from "../../../_reducers";

const NavLink = styled(Link)`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transition: 0.3s;
  &:hover {
    background: ${SUB_COLOR};
    color: white;
  }
  @media only screen and (min-width: 992px) {
    height: 2.9rem;
  }
`;

const Navigation = ({ mobileSize }) => {
  const dispatch = useDispatch();
  const [FixedNavbar, setFixedNavbar] = useState(false);
  const { pageNumber } = useSelector((state) => state);

  const onClickHandler = (i) => {
    dispatch({
      type: PAGE_CHANGE,
      pageNumber: i,
      posterName: navContents[i].name,
      postIntro: navContents[i].intro,
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
    if (mobileSize) {
      window.addEventListener("scroll", scrollCallBack);
    } else {
      return;
    }
    return () => {
      if (mobileSize) {
        window.removeEventListener("scroll", scrollCallBack);
      } else {
        return;
      }
    };
  }, [mobileSize]);

  const navRow = (navContents) => {
    return navContents.map((v, i) => (
      <Col
        key={i}
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
          to={v.name === "Mainpage" ? "/" : `/${v.name}`}
        >
          <FontAwesomeIcon icon={v.icon} />
          {i === pageNumber && <span style={{ marginLeft: "1rem" }}>{v.explain}</span>}
        </NavLink>
      </Col>
    ));
  };

  const navCoulmn = (navContents) => {
    return navContents.map((v, i) => (
      <Col key={i} span={24} onClick={() => onClickHandler(i)} style={{ transition: "0.3s" }}>
        <NavLink
          style={
            i === pageNumber
              ? {
                  borderLeft: `5px solid ${SUB_COLOR}`,
                }
              : null
          }
          to={v.name === "Mainpage" ? "/" : `/${v.name}`}
        >
          <FontAwesomeIcon icon={v.icon} />
          <span style={{ marginLeft: "1rem" }}>{v.explain}</span>
        </NavLink>
      </Col>
    ));
  };
  return (
    <>
      <Row className={mobileSize ? (FixedNavbar ? "nav_sticky" : "nav_header") : null}>
        {mobileSize ? navRow(navContents) : navCoulmn(navContents)}
      </Row>
    </>
  );
};

export default Navigation;
