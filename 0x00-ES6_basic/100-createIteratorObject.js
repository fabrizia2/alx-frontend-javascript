export default function createIteratorObject(report) {
  let employees = [];

  for (let dept in report.allEmployees) {
    employees = [...employees, ...report.allEmployees[dept]];
  }

  let count = 0;
  const max = employees.length;

  const iterator = {
    next: function() {
      if (count < max) {
        return { value: employees[count++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  };

  return iterator;
}
