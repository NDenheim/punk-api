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
  let [randomNumber, setRandomNumber] = useState<number>(
    Math.floor(Math.random() * 80) + 1
  );

  const numberGenerator = () => {
    setRandomNumber(Math.floor(Math.random() * 80) + 1);
  };

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
