import React from "react";

import "./contactme.css";
const ContactMe = () => {
  return (
    <section className="Container">
      <div>
        <i className="fa fa-github fa-2x" aria-hidden="true"></i>
        <p>
          <a className="github" href="https://github.com/mahmoud-farag">
            Github Account
          </a>
        </p>
      </div>
      <hr></hr>
      <div>
        <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
        <p>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/mahmoud-farag-4346a4162/"
          >
            LinkedIn Account
          </a>
        </p>
      </div>
      <hr></hr>
      <div>
        <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
        <p>
          <a
            className="facebook"
            href="https://www.facebook.com/mahmoud.farag.18294053"
          >
            Facebooke Account
          </a>
        </p>
      </div>

      <hr></hr>
      <div>
        <i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i>
        <p className="whatsapp">01024279414</p>
      </div>
      <hr></hr>
      <div>
        <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
        <p className="envelope"> Gmail: mahmoud32salamn@gmial.com</p>
      </div>
    </section>
  );
};

export default ContactMe;
