import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.github.com";
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/simonhirner/";

const Project = ({ heading, username, length, specfic }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos/${username}`;
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);


  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      /*
      // getting all repos
      const response = await axios.get(allReposAPI);
      // slicing to the length
      repoList = [...response.data.slice(0, length)];
      // adding specified repos
      try {
        for (let repoName of specfic) {
          const response = await axios.get(`${specficReposAPI}/${repoName}`);
          repoList.push(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
      */

      repoList =
        [
          {
            "name": "Learning management system",
            "type": "Project at Munich University of Applied Sciences",
            "html_url": "https://github.com/SimonHirner/agenda20",
            "description": [
              "Web application for managing courses and tasks",
              "Eight weeks of development",
              "Tech stack: Java (Spring Boot), HTML, CSS",
            ],
            "languages_url": "https://api.github.com/repos/SimonHirner/agenda20/languages",
          },
          {
            "name": "Native chat application",
            "type": "Project at Munich University of Applied Sciences",
            "html_url": "https://github.com/SimonHirner/chat-app",
            "description": [
              "Native java application with client–server model",
              "Tech stack: Java (JavaFX)",
            ],
            "languages_url": "https://api.github.com/repos/SimonHirner/chat-app/languages",
          },
          {
            "name": "Decentralized application for trading intangible assets",
            "type": "Project at Munich University of Applied Sciences",
            "html_url": "https://github.com/SimonHirner/bazinga-dapp",
            "description": [
              "Blockchain project with smart contracts and React frontend",
              "Three weeks of development",
              "Tech stack: JavaScript (React), Solidity, Ethereum",
            ],
            "languages_url": "https://api.github.com/repos/SimonHirner/bazinga-dapp/languages",
          },
          {
            "name": "Application for distributed test execution with Kubernetes",
            "type": "Project at WWK Lebensversicherung a. G.",
            "description": [
              "Web application for execution and monitoring of domain specific test cases on Kubernetes Cluster",
              "Tech stack: Java (Spring Boot, Kubernetes Client API), JavaScript (Vue.js), PostgreSQL, Docker, Kubernetes",
            ],
          },
          {
            "name": "Design and deployment of microservices with Kubernetes",
            "type": "Bachelor thesis at Munich University of Applied Sciences",
            "description": [
              "Currently in progress",
            ],
          },
        ];

      // setting projectArray
      // TODO: remove the duplication.
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  });


  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projectsArray.length
            ? projectsArray.map((project, index) => (
              <ProjectCard
                key={`project-card-${index}`}
                id={`project-card-${index}`}
                value={project}
              />
            ))
            : dummyProjectsArr.map((project, index) => (
              <ProjectCard
                key={`dummy-${index}`}
                id={`dummy-${index}`}
                value={project}
              />
            ))}
        </Row>
      </Container>
    </Jumbotron >
  );
};

export default Project;
