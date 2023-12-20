import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="card-container">
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div>
        <Link to="/blogs">
          <button className="card-button" onClick={scrollToTop}>
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
