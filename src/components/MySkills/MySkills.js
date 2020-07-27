import React from "react";

import "./myskills.css";
const MySkills = () => {
  return (
    <div className="container">
      <h1>Technologies and skills</h1>
      <section className="skills">
        <div className="img nodejs">
          <img src={require("./imgs/nodejs.png")} alt="Node.js" />
        </div>
        <div className="img reactjs">
          <img src={require("./imgs/reactjs.png")} alt="React.js" />
        </div>
        <div className="img mongo">
          <img src={require("./imgs/mongoDB.png")} alt="MongoDB" />
        </div>
        <div className="img mysql">
          <img src={require("./imgs/mysql.png")} alt="MySQL" />
        </div>
        <div className="img html5">
          <img src={require("./imgs/html5.png")} alt="HTML5" />
        </div>
        <div className="img css3">
          <img src={require("./imgs/css3.png")} alt="CSS3" />
        </div>
      </section>
      <hr></hr>
      <h1>Education && certifications</h1>
      <section className="certifications">
        <h3>Bachelor of Computer Science from Menofia-university</h3>
      </section>
    </div>
  );
};

export default MySkills;
