import React from "react";
import {
  faAddressCard,
  faBlog,
  faEnvelope,
  faImages,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Nav() {
  return (
    <>
      <nav
        style={{
          width: "100%",
          height: "50px",
          display: "grid",
          gridTemplateColumns: "5fr 1fr 1fr 1fr 1fr",
          margin: "1.5rem 0",
          backgroundColor: "rgba(0,0,0,0.3)",
          borderTop: "2px solid gray",
          borderBottom: "2px solid gray",
        }}
      >
        <a
          href="/"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            backgroundColor: "rgba(0,0,0,0.1)",
          }}
        >
          <FontAwesomeIcon icon={faAddressCard} style={{ marginRight: "1rem" }} />
          About me
        </a>
        <a href="/" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <FontAwesomeIcon icon={faLaptop} />
        </a>
        <a href="/" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <FontAwesomeIcon icon={faImages} />
        </a>
        <a href="/" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <FontAwesomeIcon icon={faBlog} />
        </a>
        <a href="/" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </nav>
    </>
  );
}

export default Nav;
