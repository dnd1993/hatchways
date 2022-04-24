import React, { useState, useEffect } from "react";

import SearchInput from "../components/SearchFields/SearchInput";

import { useGlobalContext } from "../context";

const SearchFieldsForm = () => {
  const {
    students,
    setStudents,
    nameInput,
    setNameInput,
    tagInput,
    setTagInput,
  } = useGlobalContext();

  return (
    <form style={{ margin: "0 1.5rem" }}>
      <SearchInput
        placeholder="Search by name"
        value={nameInput}
        setValue={setNameInput}
      />

      <SearchInput
        placeholder="Search by tag"
        value={tagInput}
        setValue={setTagInput}
      />  
    </form>
  );
};

export default SearchFieldsForm;
