import React, { useState } from "react";
import data from "./data";

const Review = () => {
  const [index, setIndex] = useState(0);

  const { id, name, job, image, text } = data[index];

  return (
    <div className="review">
      <img src={image} alt={name} className="person-img" />

      <h4 id={`author-${id}`} className="author">
        {name}
      </h4>

      <p className="job">{job}</p>

      <p className="info">{text}</p>

      <button
        onClick={() => {
          setIndex((prev) =>  prev > 0 ? prev - 1 : data.length - 1 );
        }}
      className="prev-btn">
        Previous
      </button>
      <button
        onClick={() => {
          setIndex((prev) =>  prev < data.length-1 ? prev +1 : 0 );
        }}
      className="next-btn">
        Next
      </button>
      <button
        onClick={() => {
          let randomIndex = Math.floor(Math.random() * data.length);
        if(randomIndex==index){
            randomIndex = (index+1)%data.length
        }
          setIndex(randomIndex);
        }}
      className="random-btn">
        surprise me
      </button>
    </div>
  );
};

export default Review;
