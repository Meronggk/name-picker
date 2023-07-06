import React from "react";
const Favorites = ({ data, fav, removeFavHandler }) => {
  const namesList = fav.map((id) => {
    const name = data.filter((el) => el.id === id);
    return (
      <button
        key={id}
        className={name[0].sex === "f" ? "female" : "male"}
        onClick={() => removeFavHandler(id)}
      >
        {name[0].name}
      </button>
    );
  });

  return (
    <div className="favorite">
      <h3>
        Click on a name to add Favorites ...
        <ul className="list-container">{namesList}</ul>
      </h3>
    </div>
  );
};

export default Favorites;