
function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter(student => student.location === city);

  return studentsInCity.map(student => {
    const grade = newGrades.find(g => g.studentId === student.id)?.grade;
    return { ...student, grade: grade ?? 'N/A' };
  });
}
