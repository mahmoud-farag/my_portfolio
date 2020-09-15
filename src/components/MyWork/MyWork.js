import React from "react";

import "./mywork.css";
const MyWork = () => {
  return (
    <section className="container">
      <article className="card_proj ">
        <h2>Egyptorism</h2>
        <hr></hr>
        <section className="card_body">
          <p>
            <span>description:</span>The graduation project, it's main idea is
            display Pharaonic antiquities in 3D objects and images,I develope
            the whole API and helped in frontEnd also
          </p>
          <p>
            <span>Technologies:</span>
            NodeJS, ReactJS, MongoDB, BootstrapCSS
          </p>
        </section>

        <section className="card_buttons">
          <button>
            <a href="https://Source Code.com/mahmoud-farag/egyptourism1">
              Source Code
            </a>
          </button>
          <button>
            <a href="https://5f384709a0a6f50007c3a500--nervous-knuth-79e018.netlify.app/">
              Live Demo
            </a>
          </button>
        </section>
      </article>

      <article className="card_proj ">
        <h2>Elso7ab</h2>
        <hr></hr>
        <section className="card_body">
          <p>
            <span>description:</span>simple chat-app with my friends
          </p>
          <p>
            <span>Technologies:</span>
            NodeJS, SocketIO, ReactJS, BootstrapCSS
          </p>
        </section>

        <section className="card_buttons">
          <button>
            <a href="https://Source Code.com/mahmoud-farag/personal-ChatApp-express-react">
              Source Code
            </a>
          </button>
          <button>
            <a href="https://hardcore-leakey-0add50.netlify.app/">Live Demo</a>
          </button>
        </section>
      </article>

      <article className="card_proj ">
        <h2>COMS</h2>
        <hr></hr>
        <section className="card_body">
          <p>
            <span>description:</span>Conference Management System (COMS)
          </p>
          <p>
            <span>Technologies:</span>
            Java-EE, MySQL, html, materialize.css
          </p>
        </section>

        <section className="card_buttons">
          <button>
            <a href="https://Source Code.com/Mohanedy98/COMS-SE">Source Code</a>
          </button>
          <button>
            <a href="">Live Demo</a>
          </button>
        </section>
      </article>
    </section>
  );
};

export default MyWork;
