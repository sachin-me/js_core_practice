const mark = {
  marks: {
    physics: 0,
    maths: 0,
    chemistry: 0
  }
}
function createStudent(p, c, m) {
  p += mark.marks.physics;
  c += mark.marks.chemistry;
  m += mark.marks.maths;
  const subjectNum = {p, c, m}
  let student = {
    subjectNum
  }
  student.total = function() {
    const totalMarks = p + c + m;
    return totalMarks;
  }
  student.percentage = function() {
    const percent = (student.total() * 100) / 300;
    return percent.toFixed(2);
  }
  student.isPass = function() {
    if (student.percentage() < 33) {
      return `Fail`;
    } else {
      return `Pass`;
    }
  }
  console.log(student.total());
  console.log(student.percentage());
  console.log(student.isPass());
  return student;
}
console.log(createStudent(10, 30, 10));

