import React, { useState } from "react";
import NamesData from "../Components/NamesData";
import Name from "./BabyName";
import GenderNameButtons from "./GenderNameButtons";
import Favorites from "./Favorites";

const NameLists = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [fav, setFav] = useState([]);
  const [isBoyClicked, setIsBoyClicked] = useState(false);
  const [isGirlClicked, setIsGirlClicked] = useState(false);

  // favorite  adding function

  function addFavorite(id) {
    setFav([...fav, id]);
  }
  function removeFav(id) {
    setFav(fav.filter((item) => item !== id));
  }
  return (
    <div className={props.class}>
      <div>
        <h3 className=" title mb-3 mt-5">BabyNames</h3>
        <input
          placeholder="Search..."
          onChange={(event) => setSearchTerm(event.target.value)}
        ></input>
        <GenderNameButtons
          boyFunction={() => {
            setIsBoyClicked(true);
          }}
          girlFunction={() => {
            setIsGirlClicked(true);
          }}
          allGenderHandler={() => {
            setIsGirlClicked(false);
            setIsBoyClicked(false);
          }}
        />
      </div>
      <Favorites fav={fav} data={NamesData} removeFavHandler={removeFav} />
      <hr></hr>

      {isGirlClicked
        ? NamesData.filter((el) => {
            if (searchTerm === "") {
              return el;
            } else {
              return el.name.toLowerCase().includes(searchTerm.toLowerCase());
            }
          })
            .filter((el) => {
              if (el.sex === "f") {
                return el;
              }
            })
            .filter((item) => !fav.includes(item.id))

            .sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
              return 1;
            })
            .map((el, index) => (
              <Name
                handler={() => addFavorite(el.id)}
                key={index}
                sex={el.sex === "f" ? "female" : "male"}
                name={el.name}
              />
            ))
        : isBoyClicked
        ? NamesData.filter((el) => {
            if (searchTerm === "") {
              return el;
            } else {
              return el.name.toLowerCase().includes(searchTerm.toLowerCase());
            }
          })
            .filter((el) => {
              if (el.sex === "m") {
                return el;
              }
            })
            .filter((item) => !fav.includes(item.id))

            .sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
              return 1;
            })
            .map((el, index) => (
              <Name
                handler={() => addFavorite(el.id)}
                key={index}
                sex={el.sex === "f" ? "female" : "male"}
                name={el.name}
              />
            ))
        : NamesData.filter((el) => {
            if (searchTerm === "") {
              return el;
            } else {
              return el.name.toLowerCase().includes(searchTerm.toLowerCase());
            }
          })
            .filter((item) => !fav.includes(item.id))
            .sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
              return 1;
            })
            .map((el, index) => (
              <Name
                handler={() => addFavorite(el.id)}
                key={index}
                sex={el.sex === "f" ? "female" : "male"}
                name={el.name}
              />
            ))}
    </div>
  );
};
export default NameLists;