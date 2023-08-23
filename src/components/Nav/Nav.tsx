import { FormEventHandler } from "react";
import FiltersList from "../FiltersList/FiltersList";
import SearchBar from "../SearchBar/SearchBar";
import "./Nav.scss";

type NavProps = {
  handleSearch: FormEventHandler<HTMLInputElement>;
  handleFilter: FormEventHandler<HTMLInputElement>;
};

const Nav = ({ handleSearch, handleFilter }: NavProps) => {
  return (
    <nav className="nav">
      <h2 className="nav__heading">BEER HUNTER</h2>
      <SearchBar handleSearch={handleSearch} />
      <FiltersList onChange={handleFilter} />
    </nav>
  );
};

export default Nav;
