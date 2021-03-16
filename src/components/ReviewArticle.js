import React from "react";
import { FaQuoteRight } from "react-icons/fa";

function ReviewArticle({ id, image, name, title, quote, position }) {
  return (
    <article key={id} className={position}>
      <img className="person-img" src={image} alt={name} />
      <h4>{name}</h4>
      <p className="title">{title}</p>
      <p className="text">{quote}</p>
      <FaQuoteRight className="icon" />
    </article>
  );
}

export default ReviewArticle;
