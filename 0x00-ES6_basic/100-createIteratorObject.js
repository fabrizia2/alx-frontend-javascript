export default function createIteratorObject(report) {
  const departments = Object.keys(report.allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;
  return {
    next() {
      if (currentDepartmentIndex >= departments.length) {
        return { done: true };
      }
      const departmentName = departments[currentDepartmentIndex];
      const departmentEmployees = report.allEmployees[departmentName];
      const employeeName = departmentEmployees[currentEmployeeIndex];
      currentEmployeeIndex++;
      if (currentEmployeeIndex >= departmentEmployees.length) {
        currentDepartmentIndex++;
        currentEmployeeIndex = 0;
      }
      return { value: employeeName, done: false };
    },
  };
}
