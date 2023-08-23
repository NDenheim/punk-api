import { FormEventHandler } from "react";
import "./SearchBar.scss";

type SearchBarProps = {
  handleSearch: FormEventHandler<HTMLInputElement>;
};

const SearchBar = ({ handleSearch }: SearchBarProps) => {
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        onInput={handleSearch}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
