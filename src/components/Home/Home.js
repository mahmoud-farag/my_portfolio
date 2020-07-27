import React from "react";

import "./home.css";

const Home = () => {
  return (
    <section className="main">
      <div className="hint">
        <h1>Eng: Mahmoud Farag</h1>
        <p>Full stack web developer</p>
      </div>
      <div className="btns">
        <a className="btn btn_my_work" href="/MyWork">
          See my work
        </a>
        <a
          className="btn btn_my_resume"
          href="https://novoresume.com/editor/resume/94a20c30-cbf7-11ea-9f90-f10d8d81d234#"
        >
          Read my resume
        </a>
      </div>
      <script src="./main.js"></script>
    </section>
  );
};

export default Home;
