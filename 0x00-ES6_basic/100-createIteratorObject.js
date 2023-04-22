export default function createIteratorObject(report) {
  let departments = Object.values(report.allEmployees);
  let currentDepartment = 0;
  let currentEmployee = 0;

  const iterator = {
    next() {
      if (currentDepartment >= departments.length) {
        return { done: true };
      }

      let employees = departments[currentDepartment];
      if (currentEmployee >= employees.length) {
        currentDepartment++;
        currentEmployee = 0;
        return this.next();
      }

      let employee = employees[currentEmployee];
      currentEmployee++;
      return { value: employee, done: false };
    }
  };

  return iterator;
}
