import React from "react";
import "./YoutubeComponent.css";

const YoutubeComponent = (props) => {
  return (
    <div className="container">
      <div className="youtube-wrapper">
        <div className="img-thumb">
          <img src="https://placehold.co/250x118" alt="" />
          <p className="time">{props.time}</p>
        </div>
        <p className="title">{props.title}</p>
        <p className="desc">{props.desc}</p>
      </div>
    </div>
  );
};

YoutubeComponent.defaultProps = {
  time: "00.00",
  title: "Title Here",
  desc: "xx ditonton. x hari yang lalu",
};

export default YoutubeComponent;
