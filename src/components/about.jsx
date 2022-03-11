import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about_me: [
        {
          id: "first-p-about",
          content:
            "My name is Simon Hirner. I'm currently studying for a master's degree in Software Engineering at the University of Innsbruck. On this website you can find my latest programming projects."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="box-shadow-full">
            <div className="about-me pt-4 pt-md-0">
              <div className="title-box-2">
                <h5 className="title-left">About Me</h5>
              </div>
              {this.state.about_me.map(content => {
                return (
                  <p className="lead" key={content.id}>
                    {content.content}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
