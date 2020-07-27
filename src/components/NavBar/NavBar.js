import React from "react";

import "./style.css";

const NavBar = () => {
  return (
    <header>
      <div className="logo">Logo</div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/MySkills">MySkills</a>
          </li>
          <li>
            <a href="/ContactMe">ContactMe</a>
          </li>
          <li>
            <a href="MyWork">MyWork</a>
          </li>
        </ul>
      </nav>
      <div className="clearboth"></div>
    </header>
  );
};

export default NavBar;
