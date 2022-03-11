import React from "react";
import Obfuscate from "react-obfuscate";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      email: 'fvzba.uveare99@tznvy.pbz'
    };
  }

  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundColor: "#0078ff" }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="contact-mf">
            <div id="contact" className="box-shadow-full">
              <div className="title-box-2 pt-4 pt-md-0">
                <h5 className="title-left">Get in Touch</h5>
              </div>
              <div className="more-info">
                <p className="lead">
                  Whether you want to get in touch, ask a question about a project,
                  or just say hi, I'd love to hear from you.
                  Please feel free to <Obfuscate email={doTheTrick(this.state.email)}>email</Obfuscate> me.
                </p>
              </div>
              <div className="socials">
                <ul>
                  <li>
                    <a
                      href="https://github.com/SimonHirner"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="ico-circle">
                        <i className="ion-social-github"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/simon-hirner/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="ico-circle">
                        <i className="ion-social-linkedin"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

const doTheTrick = (str) => {
  return str.replace(/[a-zA-Z]/g, function (c) { return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26); });
}

export default Contact;
