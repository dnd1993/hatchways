
export const filterByName = (students, nameInput) => {
  const filteredStudentsByName = students.filter((student) => {
    const fullName = `${student.firstName.toLowerCase()} ${student.lastName.toLowerCase()}`;
    return fullName.includes(nameInput.toLowerCase());
  });
  
  return filteredStudentsByName;
};

export const filterByTag = (students, tagInput) =>
  students.filter(
    (student) => student.tags.filter((tag) => tag.includes(tagInput)).length > 0
  );
