import React from "react";
import "../sass/main.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Flood Of Ideas</span>
          <span className="heading-primary--sub">
            NASA International Space Apps Challenge
          </span>
        </h1>

        <a
          href="https://twitter.com/"
          target="blank"
          className="btn btn--white btn--animated"
        >
          Twitter
        </a>
        <a
          href="https://twitter.com/"
          target="blank"
          className="btn btn--white btn--animated"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com/"
          target="blank"
          className="btn btn--white btn--animated"
        >
          Project
        </a>
      </div>
    </header>
  );
};

export default Header;
