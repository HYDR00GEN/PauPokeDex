import React from "react";

const DropDownMenu = ({ select, setSelect }) => {
  return (
    <>
      <select
        name="poke-filter"
        id="pokefilter"
        value={select}
        onChange={(e) => setSelect(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Not Captured">Not Captured</option>
        <option value="Captured">Captured</option>
      </select>
    </>
  );
};

export default DropDownMenu;
