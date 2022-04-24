import React from "react";

import PropTypes from "prop-types";

const SearchInput = ({ type, placeholder, value, setValue, validateInput }) => {
  const textInputStyles = {
    backgroundColor: "transparent",
    border: "none",
    width: "100%",
    fontSize: "inherit",
    padding: "1rem 0 .6rem .5rem",
    borderBottom: "1px solid rgb(211, 218, 218)",
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      style={textInputStyles}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

SearchInput.defaultProps = {
  type: "text",
};

SearchInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string,
  setValue: PropTypes.func,
};

export default SearchInput;
