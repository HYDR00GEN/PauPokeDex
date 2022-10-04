import React from "react";

function DropDownMenu() {
  return (
    <select name="poke-filter" id="pokefilter">
      <option value="volvo">All</option>
      <option value="saab">Not Captured</option>
      <option value="mercedes">Captured</option>
    </select>
  );
}

export default DropDownMenu;
