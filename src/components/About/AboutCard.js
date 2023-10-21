import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arnav Bule </span>
            from <span className="purple"> Pune, India.</span>
            <br /> I am a second year student pursuing a Bachleor's degree in Computer Science at MIT ADT University , Pune.
            <br />
            I am currently dedicating my time to personal projects while actively seeking internship opportunities.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Novels 📕
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Cool Tech 🧑‍💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Adventure Sports 🥾
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "All Progress Takes Place Outside the comfort Zone."{" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
