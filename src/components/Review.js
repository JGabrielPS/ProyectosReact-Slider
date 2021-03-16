import React, { useState, useEffect } from "react";
import ReviewArticle from "./ReviewArticle";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import data from "../data";

function Review() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) setIndex(lastIndex);
    if (index > lastIndex) setIndex(0);
  }, [index, people]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          let position = "nextSlide";

          if (index === personIndex) position = "activeSlide";

          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          )
            position = "lastSlide";

          return <ReviewArticle {...person} position={position} />;
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Review;
