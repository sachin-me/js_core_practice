const mark = {
  marks: {
    physics : 0,
    maths : 0,
    chemistry : 0
  }
}
function createStudent(p, c, m) {
  p += mark.marks.physics;
  c += mark.marks.chemistry;
  m += mark.marks.maths;
  let student = Object.create(null);
  const subjectNum = {p, c, m};
  student.num = subjectNum;
  student.total = () => {
    return p + c + m;
  }
  student.percent = () => {
    return ((student.total() * 100) / 300).toFixed(2);
  }
  student.passOrFail = () => {
    if (student.percent() < 33) {
      return `Fail`;
    } else {
      return `Pass`;
    }
  }
  console.log(student.total());
  console.log(student.percent());
  console.log(student.passOrFail());
  return student;
}
console.log(createStudent(80, 81, 90));