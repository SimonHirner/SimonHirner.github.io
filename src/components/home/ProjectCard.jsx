import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

const ProjectCard = ({ value }) => {
  const {
    name,
    description,
    html_url,
    type,
  } = value;
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{name || <Skeleton />} </Card.Title>
          <Card.Subtitle class="text-muted">{type || <Skeleton />} </Card.Subtitle>
          <hr />
          <Card.Text>
            {(!description) ? "" : <List items={description} /> || <Skeleton count={3} />}
          </Card.Text>
          {html_url ? <CardButtons html_url={html_url} /> : ""}
        </Card.Body>
      </Card>
    </Col>
  );
};

const List = ({ items }) => {
  const listItems = items.map((items) => <li>{items}</li>); return (
    <ul>{listItems}</ul>);
}

const CardButtons = ({ html_url }) => {
  return (
    <>
      <a href={html_url} target=" _blank" className="btn btn-outline-secondary">
        <i className="fab fa-github" /> Repo
      </a>
    </>
  );
};

/*
const Language = ({ languages_url, repo_url }) => {
  const [data, setData] = useState([]);

  const handleRequest = useCallback(async () => {
    try {
      const response = await axios.get(languages_url);
      return setData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }, [languages_url]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  const array = [];
  let total_count = 0;
  for (let index in data) {
    array.push(index);
    total_count += data[index];
  }

  return (
    <div className="pb-3">
      Languages:{" "}
      {array.length
        ? array.map((language) => (
          <a
            key={language}
            className="badge badge-light card-link"
            href={repo_url + `/search?l=${language}`}
            target=" _blank"
          >
            {language}:{" "}
            {Math.trunc((data[language] / total_count) * 1000) / 10} %
          </a>
        ))
        : "code yet to be deployed."}
    </div>
  );
};
*/

/*
const CardFooter = ({ star_count, repo_url, pushed_at }) => {
  return (
    <p className="card-text">
      <small className="text-muted">Updated b</small>
    </p>
  );
};
*/

export default ProjectCard;
