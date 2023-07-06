import React from "react";
const GenderNameButtons = (props) => {
  return (
    <div>
      <button onClick={props.allGenderHandler} className="all">
        All
      </button>
      <button onClick={props.boyFunction} className="boy bg-primary ml-2 mr-2">
        Boy
      </button>
      <button onClick={props.girlFunction} className="girl">
        Girl
      </button>
    </div>
  );
};
export default GenderNameButtons;