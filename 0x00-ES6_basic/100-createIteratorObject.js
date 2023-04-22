export default function createIteratorObject(report) {
  let allEmployees = report.allEmployees;
  let flattenedEmployees = [];
  
  for (let dept in allEmployees) {
    flattenedEmployees.push(...allEmployees[dept]);
  }
  
  let currentIndex = 0;
  
  return {
    next: function() {
      return currentIndex < flattenedEmployees.length ?
        { value: flattenedEmployees[currentIndex++], done: false } :
        { done: true };
    }
  };
}
