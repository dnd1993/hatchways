import React, { useState } from "react";
import PropTypes from "prop-types";

import Tags from "./Tags";

import "./Student.css";

const Student = ({ student }) => {
  const [isGradesVisible, setIsGradesVisible] = useState(false);

  const {
    id,
    firstName,
    lastName,
    pic: img,
    email,
    grades,
    skill,
    company,
  } = student;

  const average =
    grades.reduce((acc, num) => acc + parseInt(num), 0) / grades.length;
    
  return (
    <div className="student-container">
      <img src={img} className="student-container_img" />
      <div className="student-container_descr">
        <div className="student-container_name-btn">
          <h2 className="student-container_name">
            {firstName} {lastName}
          </h2>
          <button
            className="student-container_btn"
            onClick={() => setIsGradesVisible(!isGradesVisible)}
          >
            {isGradesVisible ? "−" : "+"}
          </button>
        </div>
        <p>Email: {email}</p>
        <p>Company: {company}</p>
        <p>Skill: {skill}</p>
        <p>Average: {average}%</p>
        {isGradesVisible && (
          <div>
            {grades.map((grade, i) => (
              <p key={i}>
                Test {i + 1}:{" "}
                <span
                  style={{
                    marginLeft: "2.1rem",
                  }}
                >
                  {grade}%
                </span>
              </p>
            ))}
          </div>
        )}
        <Tags id={id} />
      </div>
    </div>
  );
};

Student.propTypes = {
  student: PropTypes.object,
};

export default Student;
