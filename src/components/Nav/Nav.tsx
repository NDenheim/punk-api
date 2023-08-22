import { FormEventHandler, useState } from "react";
import FiltersList from "../FiltersList/FiltersList";
import SearchBar from "../SearchBar/SearchBar";
import "./Nav.scss";

type NavProps = {
  handleSearch: FormEventHandler<HTMLInputElement>;
  handleFilter: FormEventHandler<HTMLInputElement>;
};

const Nav = ({ handleSearch, handleFilter }: NavProps) => {
  // const [checked, setChecked] = useState<boolean>(false);

  // const handleClick = () => {
  //   setChecked(!checked);
  // };

  return (
    <nav className="nav">
      <SearchBar handleSearch={handleSearch} />
      <FiltersList onChange={handleFilter} />
    </nav>
  );
};

export default Nav;
