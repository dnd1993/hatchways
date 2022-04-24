import React from "react";
import { useGlobalContext } from "../context";

import SearchField from "../containers/SearchFieldsForm";
import Student from "../components/Student/Student";

const HomePage = () => {
  const { students, filteredStudents, isFilterApplied } = useGlobalContext();

  const studentsList = isFilterApplied ? filteredStudents : students;

  return (
    <section className="students-container">
      <SearchField />

      {studentsList.length < 1 && (
        <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
          No students matched your search criteria
        </h2>
      )}
      
      {studentsList.map((student) => (
        <Student key={student.id} student={student} />
      ))}
    </section>
  );
};

export default HomePage;
