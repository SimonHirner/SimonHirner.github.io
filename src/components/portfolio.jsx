import React from "react";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Projects</h3>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="work-box">
                <div className="card">
                  <div className="card-body">
                    <div className="work-content">
                      <h3 className="card-title">Learning management system</h3>
                      <h6 className="card-subtitle mb-3 text-muted">Project at Munich University of Applied Sciences</h6>
                      <hr />
                      <ul className="card-text">
                        <li>Web application for managing courses and tasks</li>
                        <li>Eight weeks of development</li>
                        <li>Tech stack: Java (Spring Boot), HTML, CSS</li>
                      </ul>
                      <a href="https://github.com/SimonHirner/agenda20" target="_blank" className="btn btn-outline-dark">
                        <i className="ion-social-github" /> Git Repository
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="work-box">
                <div className="card">
                  <div className="card-body">
                    <div className="work-content">
                      <h3 className="card-title">Native chat application</h3>
                      <h6 className="card-subtitle mb-3 text-muted">Project at Munich University of Applied Sciences</h6>
                      <hr />
                      <ul className="card-text">
                        <li>Native java application with client-server model</li>
                        <li>Tech stack: Java (JavaFX)</li>
                      </ul>
                      <a href="https://github.com/SimonHirner/chat-app" target="_blank" className="btn btn-outline-dark">
                        <i className="ion-social-github" /> Git Repository
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="work-box">
                <div className="card">
                  <div className="card-body">
                    <div className="work-content">
                      <h3 className="card-title">Decentralized application for trading intangible assets</h3>
                      <h6 className="card-subtitle mb-3 text-muted">Project at Munich University of Applied Sciences</h6>
                      <hr />
                      <ul className="card-text">
                        <li>Blockchain project with smart contracts and React frontend</li>
                        <li>Three weeks of development</li>
                        <li>Tech stack: JavaScript (React), Solidity, Ethereum</li>
                      </ul>
                      <a href="https://github.com/SimonHirner/bazinga-dapp" target="_blank" className="btn btn-outline-dark">
                        <i className="ion-social-github" /> Git Repository
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="work-box">
                <div className="card">
                  <div className="card-body">
                    <div className="work-content">
                      <h3 className="card-title">CI/CD pipeline with Kubernetes</h3>
                      <h6 className="card-subtitle mb-3 text-muted">Project at Munich University of Applied Sciences</h6>
                      <hr />
                      <ul className="card-text">
                        <li>CI/CD pipeline for deploying a web application on Kubernetes</li>
                        <li>Tech stack: Java (Spring Boot), JavaScript (Vue.js), MongoDB, Docker, Kubernetes (Minikube)</li>
                      </ul>
                      <a href="https://github.com/SimonHirner/kubernetes-jenkins-simplist" target="_blank" className="btn btn-outline-dark">
                        <i className="ion-social-github" /> Git Repository
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="work-box">
                <div className="card">
                  <div className="card-body">
                    <div className="work-content">
                      <h3 className="card-title">Application for distributed test execution with Kubernetes</h3>
                      <h6 className="card-subtitle mb-3 text-muted">Project at WWK Lebensversicherung a. G.</h6>
                      <hr />
                      <ul className="card-text">
                        <li>Web application for execution and monitoring of domain specific test cases on Kubernetes cluster</li>
                        <li>Tech stack: Java (Spring Boot, Kubernetes Client API), JavaScript (Vue.js), PostgreSQL, Docker, Kubernetes (Rancher)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="work-box">
                <div className="card">
                  <div className="card-body">
                    <div className="work-content">
                      <h3 className="card-title">Design and deployment of microservices with Kubernetes using the example of a CRM system</h3>
                      <h6 className="card-subtitle mb-3 text-muted">Bachelor thesis at Munich University of Applied Sciences</h6>
                      <hr />
                      <ul className="card-text">
                        <li>Simplified CRM system with microservice architecture</li>
                        <li>Deployment, service discovery, load balancing and horizontal scaling with Kubernetes</li>
                        <li>Three months of development</li>
                        <li>Tech stack: Java (Spring Boot), JavaScript (React), MongoDB, Docker, Kubernetes (minikube)</li>
                      </ul>
                      <a href="https://github.com/SimonHirner/bachelor-thesis" target="_blank" className="btn btn-outline-dark">
                        <i className="ion-social-github" /> Git Repository
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default Portfolio;
