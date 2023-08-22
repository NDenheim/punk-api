import { ChangeEventHandler } from "react";
import "./FilterItem.scss";

type FilterItemProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
};

const FilterItem = ({ onChange, label }: FilterItemProps) => {
  return (
    <div>
      <input
        className="checkbox"
        type="checkbox"
        onChange={onChange}
        value={label}
      />
      <label htmlFor="checkbox">{label}</label>
    </div>
  );
};

export default FilterItem;
