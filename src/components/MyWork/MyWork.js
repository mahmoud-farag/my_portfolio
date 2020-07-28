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
            display Pharaonic antiquities in 3D objects and images
          </p>
          <p>
            <span>Technologies:</span>
            Node.js, React.js, MongoDB, Bootstrap.css
          </p>
        </section>

        <section className="card_buttons">
          <button>
            <a href="https://github.com/mahmoud-farag/egyptourism1">GitHub</a>
          </button>
          <button>
            <a href="">Live Demo</a>
          </button>
        </section>
      </article>

      <article className="card_proj ">
        <h2>Elso7ab</h2>
        <hr></hr>
        <section className="card_body">
          <p>
            <span>description:</span>simple chat-app with my friends privet
          </p>
          <p>
            <span>Technologies:</span>
            Node.js, React.js, Bootstrap.css
          </p>
        </section>

        <section className="card_buttons">
          <button>
            <a href="https://github.com/mahmoud-farag/personal-ChatApp-express-react">
              GitHub
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
            <span>description:</span>Confrence Management System (COMS){" "}
          </p>
          <p>
            <span>Technologies:</span>
            Java-EE, My-SQL, html, materialize.css
          </p>
        </section>

        <section className="card_buttons">
          <button>
            <a href="https://github.com/Mohanedy98/COMS-SE">GitHub</a>
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
