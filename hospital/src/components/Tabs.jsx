import React from "react";

export default function Tabs(props) {
  return (
    <div className="border  grid-flow-col rounded">
      <span>
        <img class="w-10 h-10 rounded" src={props.image} alt="Default avatar" />
      </span>
      <div>
        <div>
          <p></p>
          <h1 className="text-center  "> {props.title}</h1>
        </div>
        <p className="text-center">{props.price}</p>
      </div>
    </div>
  );
}
