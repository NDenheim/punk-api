import { FormEventHandler } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Nav.scss";

type NavProps = {
  handleSearch: FormEventHandler<HTMLInputElement>;
};

const Nav = ({ handleSearch }: NavProps) => {
  return (
    <nav className="nav">
      <SearchBar handleSearch={handleSearch} />
      <p>Filters</p>
    </nav>
  );
};

export default Nav;
