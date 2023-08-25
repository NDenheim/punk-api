import { FormEventHandler, useState } from "react";
import FiltersList from "../FiltersList/FiltersList";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "./Nav.scss";

type NavProps = {
  handleSearch: FormEventHandler<HTMLInputElement>;
  handleFilter: FormEventHandler<HTMLInputElement>;
};

const Nav = ({ handleSearch, handleFilter }: NavProps) => {
  let randomNumber = Math.floor(Math.random() * 80) + 1;

  const numberGenerator = () => {
    randomNumber = Math.floor(Math.random() * 325) + 1;
    console.log(randomNumber);
  };

  // numberGenerator();

  return (
    <nav className="nav">
      <div className="nav__filters">
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <h2 className="nav__heading">BEER HUNTER</h2>
        </Link>
        <SearchBar handleSearch={handleSearch} />
        <FiltersList onChange={handleFilter} />
      </div>
      <div className="nav__random">
        <p> Want to try something new?</p>
        <Link to={`/${randomNumber}`}>
          <button className="nav__random--button" onClick={numberGenerator}>
            Random
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

// let randomNumber;

//   const numberGenerator = () => {
//     randomNumber = Math.floor(Math.random() * 325) + 1;
//     console.log(randomNumber);
//     return randomNumber;
//   };

{
  /* <Link to={`/${randomNumber}`}>
<button onClick={numberGenerator}>Random</button>
</Link> */
}

//   <Link to={`/${Math.floor(Math.random() * 325) + 1}`}>
//         <button onClick={numberGenerator}>Random</button>
//       </Link>
