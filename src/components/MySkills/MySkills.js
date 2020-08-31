import React from "react";

import "./myskills.css";
const MySkills = () => {
  return (
    <div className="container">
      <h1>Technologies and skills</h1>
      <section className="skills">
        <img src={require("./imgs/nodejs.png")} alt="Node.js" />

        <img src={require("./imgs/reactjs.png")} alt="React.js" />

        <img src={require("./imgs/mongoDB.png")} alt="MongoDB" />

        <img src={require("./imgs/mysql.png")} alt="MySQL" />

        <img src={require("./imgs/html5.png")} alt="HTML5" />

        <img src={require("./imgs/css3.png")} alt="CSS3" />
      </section>
      <hr></hr>
      <h1>Education && certifications</h1>
      <section className="certifications">
        <ol>
          <li>Bachelor of Computer Science from Menofia-university</li>
          <li>Project Management from USA university</li>
        </ol>
      </section>
    </div>
  );
};

export default MySkills;
