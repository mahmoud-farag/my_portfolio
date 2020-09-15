import React from "react";

import "./home.css";

const Home = () => {
  return (
    <section className="main">
      <div className="hint">
        <h1>Eng: Mahmoud Farag</h1>
        <p>Full stack web developer</p>

        <p>
          My target is to be MERN full-stack developer, now I'm a nodejs
          developer and I learning ReactJS in parallel
        </p>
      </div>
      <div className="btns">
        <a className="btn btn_my_work" href="/MyWork">
          See my work
        </a>
        <a
          className="btn btn_my_resume"
          href="https://drive.google.com/drive/folders/1YgG9nSlmvFo09uEAEdoBXD78DuimplfQ?usp=sharing"
        >
          Read my resume
        </a>
      </div>
    </section>
  );
};

export default Home;
