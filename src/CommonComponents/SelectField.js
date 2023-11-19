import React from "react";
import Select from "react-select";

function SelectField({ option, setCategory }) {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: "20em",
      height: "3em",
      borderRadius: "7px",
      margin: "0 0 1.25em 0",
      border: "2px solid #ccc",
    }),
    menu: (provided) => ({
      ...provided,
      maxWidth: "20em",
      borderRadius: "7px",
    }),
    option: (provided, state) => ({
      ...provided,
      width: "19em",
      borderRadius: "7px",
      color: state.isFocused ? "white" : "black",
      backgroundColor: state.isFocused ? "black" : "white",
    }),
  };

  return (
    <div>
      <Select
        isClearable={true}
        isSearchable={false}
        styles={customStyles}
        placeholder="Select Category"
        options={option?.map((e) => ({ value: e, label: e }))}
        onChange={(selected) => setCategory(selected ? selected.value : null)}
      />
    </div>
  );
}

export default SelectField;
