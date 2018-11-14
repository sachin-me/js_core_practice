const student = {
  name: 'Sachin',
  marks: {
    math: 90,
    physics: 80,
    chemistry: 81
  },
  total: function() {
    let totalMarks = student.marks.math + student.marks.physics + student.marks.chemistry;
    return totalMarks;
  },
  percentage: function() {
    const percent = (student.total() * 100) / 300;
    return percent.toFixed(2);
  },
  isPass: function() {
    if (student.percentage() < 33) {
      return ('Fail');
    } else {
      return ('Pass');
    }
  }
}

console.log(student.total());
console.log(student.percentage());
console.log(student.isPass());