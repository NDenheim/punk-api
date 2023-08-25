import "./FiltersList.scss";
import FilterItem from "../FilterItem/FilterItem";
import { ChangeEventHandler } from "react";

type FiltersListProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const FiltersList = ({ onChange }: FiltersListProps) => {
  return (
    <div>
      <ul className="filter-list">
        <FilterItem onChange={onChange} label=" High Alcohol" />
        <FilterItem onChange={onChange} label=" Classic Range" />
        <FilterItem onChange={onChange} label=" Acidic" />
        <FilterItem onChange={onChange} label=" Bitter" />
      </ul>
    </div>
  );
};

export default FiltersList;
