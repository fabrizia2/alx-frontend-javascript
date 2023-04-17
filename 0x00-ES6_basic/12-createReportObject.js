export default function createReportObject(employeesList) {
  const allEmployees = {
    ...employeesList
  };
  
  return {
    allEmployees: allEmployees,
    getNumberOfDepartments() {
      return Object.keys(allEmployees).length;
    }
  };
}
