import { FormEvent, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Nav.scss";

const Nav = () => {
  const [search, setSearch] = useState<string>("");

  const handleFilter = (event: FormEvent<HTMLInputElement>) => {
    const userInput = event.currentTarget.value.toLowerCase();
    setSearch(userInput);
  };
  return (
    <nav className="nav">
      <SearchBar handleFilter={handleFilter} />
      <p>Filters</p>
    </nav>
  );
};

export default Nav;

// const [filter, setFilter] = useState<string>("");
//   const [dropdown, setDropdown] = useState<string>("");

//   const handleFilterByName = (event: FormEvent<HTMLInputElement>) => {
//     const userInput = event.currentTarget.value.toLowerCase();
//     setFilter(userInput);
//   };
