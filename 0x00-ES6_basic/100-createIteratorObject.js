export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  const departments = Object.keys(allEmployees);
  let currentDeptIndex = 0;
  let currentEmployeeIndex = 0;

  const iterator = {
    next: function () {
      if (currentDeptIndex >= departments.length) {
        return { done: true };
      }
      const currentDept = departments[currentDeptIndex];
      const currentEmployee = allEmployees[currentDept][currentEmployeeIndex];
      currentEmployeeIndex++;
      if (currentEmployeeIndex >= allEmployees[currentDept].length) {
        currentDeptIndex++;
        currentEmployeeIndex = 0;
      }
      return { value: currentEmployee };
    }
  };

  return iterator;
}
