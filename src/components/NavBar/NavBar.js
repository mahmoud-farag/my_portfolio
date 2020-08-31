import React from "react";

import "./navbar.css";

const NavBar = () => {
  const mobileNav = () => {
    const burger = document.querySelector(".burger");
    const links = document.querySelectorAll("li");

    burger.addEventListener("click", () => {
      // toggle the Nav section
      const navLinks = document.getElementById("ul");
      navLinks.classList.toggle("transform_links");

      // animate the links individually
      links.forEach((li, index) => {
        if (li.style.animation) {
          li.style.animation = "";
        } else {
          li.style.animation = `animateLinks .5 ease forwards ${
            index / 7 + 1.4
          }s`;
        }
      });

      // animate burger
      burger.classList.toggle("toggle");
    });
  };
  return (
    <nav>
      <h3 className="logo">
        <img src="mahmoud3.png" alt="Logo" />
      </h3>
      <ul className="nav_links" id="ul">
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

      <div className="burger" onClick={mobileNav}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default NavBar;
