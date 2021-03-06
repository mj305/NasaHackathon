import React from "react";
import "../sass/main.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Coast Busters</span>
        </h1>

        <div className="row">
          <div className="col-1-of-2">
            <a
              href="https://github.com/mj305/NasaHackathon"
              target="blank"
              className="btn btn--white btn--animated"
            >
              GitHub
              <i class="fa fa-github"></i>
            </a>
          </div>

          <div className="project col-1-of-2">
            <a
              href="https://2020.spaceappschallenge.org/challenges/confront/flood-ideas/teams/coastbusters/project"
              target="blank"
              className="btn btn--white btn--animated"
            >
              Project
              <i class="fa fa-space-shuttle"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
