import React, { useState, useContext, useEffect } from "react";

import { filterByName, filterByTag } from "./utils/filters";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [nameInput, setNameInput] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  const filterStudents = (students) => {
    let filteredStudents = students;

    if (nameInput && tagInput) {
      filteredStudents = filterByName(filteredStudents, nameInput);
      filteredStudents = filterByTag(filteredStudents, tagInput);
    } else if (nameInput) {
      filteredStudents = filterByName(filteredStudents, nameInput);
    } else if (tagInput) {
      filteredStudents = filterByTag(filteredStudents, tagInput);
    }

    setFilteredStudents(filteredStudents);
    setIsFilterApplied(true);
  };

  useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await fetch(
          "https://api.hatchways.io/assessment/students"
        );
        const data = await response.json();
        data.students.forEach((student) => (student.tags = []));
        setStudents(data.students);
      } catch (error) {
        console.error(error.message);
      }
    };
    getStudents();
  }, []);

  useEffect(() => {
    if (!nameInput && !tagInput) {
      setStudents(students);
      setIsFilterApplied(false);
    }
    if (nameInput || tagInput) {
      filterStudents(students);
    }
  }, [nameInput, tagInput]);

  return (
    <AppContext.Provider
      value={{
        nameInput,
        setNameInput,
        tagInput,
        setTagInput,
        students,
        setStudents,
        filteredStudents,
        isFilterApplied,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
