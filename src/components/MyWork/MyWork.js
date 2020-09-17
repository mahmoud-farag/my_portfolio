/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

import "./mywork.css";
const MyWork = () => {
  return (
    <section class="cards">
      <div class="card">
        <div class="card-image">
          <img src={require("./imgs/egyptorism.png")} alt="image" />
          <div class="brightness"></div>
        </div>
        <div class="card-text">
          <h2>Egyptourism</h2>
          <p>
            The graduation project, it's main idea is display Pharaonic
            antiquities in 3D objects and images,I develope the whole API and
            helped in frontEnd also. the technologies which was used in the
            projects are NodeJS, ReactJS, MongoDB, BootstrapCSS
          </p>
        </div>

        <div class="card-btns">
          <div class=" btn source-btn" align="center">
            <a
              class="example_a"
              id="source"
              href="https://github.com/mahmoud-farag/egyptourism1"
              // to open the repo in new tab
              // target="_blank"
              rel="nofollow noopener"
            >
              source code
            </a>
          </div>
          <div class="btn live-btn" align="center">
            <a
              class="example_a"
              id="live"
              href="https://5f384709a0a6f50007c3a500--nervous-knuth-79e018.netlify.app/"
              // target="_blank"
              rel="nofollow noopener"
            >
              live demo
            </a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-image">
          <img src={require("./imgs/elso7ab.png")} alt="image" />
          <div class="brightness"></div>
        </div>
        <div class="card-text">
          <h2>Elso7ab</h2>
          <p>
            simple chat-app with my friends.the technologies which was used in
            the projects are NodeJS, SocketIO, ReactJS, BootstrapCSS
          </p>
        </div>
        <div class="dummy"></div>
        <div class="card-btns">
          <div class=" btn source-btn" align="center">
            <a
              class="example_a"
              id="source"
              href="https://github.com/mahmoud-farag/ChatAppServer"
              // to open the repo in new tab
              // target="_blank"
              rel="nofollow noopener"
            >
              source code
            </a>
          </div>
          <div class="btn live-btn" align="center">
            <a
              class="example_a"
              id="live"
              href="https://optimistic-leakey-237ca0.netlify.app/"
              // to open the repo in new tab
              // target="_blank"
              rel="nofollow noopener"
            >
              live demo
            </a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-image">
          <img src={require("./imgs/img11.png")} alt="image" />
          <div class="brightness"></div>
        </div>
        <div class="card-text">
          <h2>COMS</h2>
          <p>
            Conference Management System (COMS). the technologies which was used
            in the projects are Java-EE, MySQL, html, materialize.css
          </p>
        </div>
        <div class="dummy"></div>
        <div class="card-btns">
          <div class=" btn source-btn" align="center">
            <a
              class="example_a"
              id="source"
              href="https://github.com/Mohanedy98/COMS-SE"
              target="_blank"
              rel="nofollow noopener"
            >
              source code
            </a>
          </div>
          <div class="btn live-btn" align="center">
            <a
              class="example_a"
              id="live"
              href="#"
              target="_blank"
              rel="nofollow noopener"
            >
              live demo
            </a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-image">
          <img src={require("./imgs/budgety.png")} alt="image" />
          <div class="brightness"></div>
        </div>
        <div class="card-text">
          <h2>Monthly Budget</h2>
          <p>
            a small project implemented using just pure HTML, CSS, and JS. the
            project used to calculate the home budget per month, you just need
            to insert your incomes and your expenses. also you can delete any
            item in any time and the whole budget will be updated automatically.
          </p>
        </div>

        <div class="card-btns">
          <div class=" btn source-btn" align="center">
            <a
              class="example_a"
              id="source"
              href="https://github.com/mahmoud-farag/monthlyBudget"
              // target="_blank"
              rel="nofollow noopener"
            >
              source code
            </a>
          </div>
          <div class="btn live-btn" align="center">
            <a
              class="example_a"
              id="live"
              href="https://goofy-allen-0c5101.netlify.app/"
              target="_blank"
              rel="nofollow noopener"
            >
              live demo
            </a>
          </div>
        </div>
      </div>

      {/* <div class="card">
        <div class="card-image">
          <img src={require("./imgs/img11.png")} alt="image" />
          <div class="brightness"></div>
        </div>
        <div class="card-text">
          <h2>Elso7ab</h2>
          <p>
            project desc Lorem ipsum dolor sit amet consectetur, Ducimus,
            repudiandae temporibus omnis illum maxime quod temporibus omnis
            illum maxime quod temporibus omnis illum maxime quod temporibus
            omnis illum maxime quod temporibus omnis illum maxime quod
          </p>
        </div>

        <div class="card-btns">
          <div class=" btn source-btn" align="center">
            <a
              class="example_a"
              id="source"
              href="https://github.com/mahmoud-farag/ChatAppServer"
              // target="_blank"
              rel="nofollow noopener"
            >
              source code
            </a>
          </div>
          <div class="btn live-btn" align="center">
            <a
              class="example_a"
              id="live"
              href="https://optimistic-leakey-237ca0.netlify.app/"
              // target="_blank"
              rel="nofollow noopener"
            >
              live demo
            </a>
          </div>
        </div>
      </div> */}

      <div class="card">
        <div class="card-image">
          <img src={require("./imgs/gallery.png")} alt="image" />
          <div class="brightness"></div>
        </div>
        <div class="card-text">
          <h2>Image Gallery</h2>
          <p>
            it's just a gallery demo used to manage pictures online, until now
            it just display pictures without any processing.
          </p>
        </div>

        <div class="card-btns">
          <div class=" btn source-btn" align="center">
            <a
              class="example_a"
              id="source"
              href="https://github.com/mahmoud-farag/monthlyBudget"
              // target="_blank"
              rel="nofollow noopener"
            >
              source code
            </a>
          </div>
          <div class="btn live-btn" align="center">
            <a
              class="example_a"
              id="live"
              href="https://hopeful-bohr-d406fa.netlify.app/"
              // target="_blank"
              rel="nofollow noopener"
            >
              live demo
            </a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-image">
          <img src={require("./imgs/protfolio.png")} alt="image" />
          <div class="brightness"></div>
        </div>
        <div class="card-text">
          <h2>My portfolio</h2>
          <p>
            my own portfolio project, i was implement it using ReactJS, pure
            CSS, and HTML, this is the second version, but i will update it and
            add new features as i could in the future
          </p>
        </div>

        <div class="card-btns">
          <div class=" btn source-btn" align="center">
            <a
              class="example_a"
              id="source"
              href="https://github.com/mahmoud-farag/my_portfolio"
              // target="_blank"
              rel="nofollow noopener"
            >
              source code
            </a>
          </div>
          <div class="btn live-btn" align="center">
            <a
              class="example_a"
              id="live"
              href="https://modest-hopper-e393dd.netlify.app/"
              // target="_blank"
              rel="nofollow noopener"
            >
              live demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
