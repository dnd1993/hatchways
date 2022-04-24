import React, { useState } from "react";
import { useGlobalContext } from "../../context";

import PropTypes from "prop-types";

const Tags = ({ id }) => {
  const { students, setStudents } = useGlobalContext();

  const [tagInput, setTagInput] = useState("");

  const getStudentById = (students) =>
    students.find((student) => student.id === id);

  const setTags = (tagInput) => {
    getStudentById(students).tags.push(tagInput);
    setStudents(students);
  };

  return (
    <>
      <div className="student-container_tags">
        {getStudentById(students).tags.map((tag) => (
          <span className="student-container_tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      
      <input
        type="text"
        placeholder="Add a tag"
        className="student-container_tag-input"
        value={tagInput}
        onChange={(e) => {
          setTagInput(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.code === "Enter") {
            setTags(tagInput);
            setTagInput("");
          }
        }}
      />
    </>
  );
};

Tags.propTypes = {
  id: PropTypes.string,
};

export default Tags;
