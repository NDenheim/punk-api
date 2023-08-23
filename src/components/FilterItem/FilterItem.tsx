import { ChangeEventHandler } from "react";
import "./FilterItem.scss";

type FilterItemProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
};

const FilterItem = ({ onChange, label }: FilterItemProps) => {
  return (
    <div className="filter">
      <input
        className="filter__checkbox"
        type="checkbox"
        onChange={onChange}
        value={label}
      />
      <label className="filter__label" htmlFor="checkbox">
        {label}
      </label>
    </div>
  );
};

export default FilterItem;
