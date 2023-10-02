import React from "react";
import "../App.css";

const Card = (props) => {
  console.log(props);
  return (
    <div className="card">
      <img src={props.imgsrc} alt="myPic" className="card_img" />
      <div className="card_info">
        <span className="card_category">{props.sname}</span>
        <h3 className="card_title">{props.title}</h3>
        <a href={props.link}>
          <button>Watch Now</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
