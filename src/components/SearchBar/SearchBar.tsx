import { FormEventHandler } from "react";
import "./SearchBar.scss";

type SearchBarProps = {
  handleFilter: FormEventHandler<HTMLInputElement>;
};

const SearchBar = ({ handleFilter }: SearchBarProps) => {
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        onInput={handleFilter}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
