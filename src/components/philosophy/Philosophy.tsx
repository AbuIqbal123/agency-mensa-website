import React from "react";
import "./philosophy.css";

const Philosophy: React.FC = () => {
  return (
    <div className="philosophy">
      <div className="stats-text">
        <p>Don't just take our word for it</p>
      </div>
      <div className="box-container container">
        <div className="box box1">
          <p>Box 1 content</p>
        </div>
        <div className="box box2">
          <p>Box 2 content</p>
        </div>
        <div className="box box3">
          <p>Box 3 content</p>
        </div>
        <div className="box box4">
          <p>Box 4 content</p>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
