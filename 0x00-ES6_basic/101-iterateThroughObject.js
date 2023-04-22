export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  let currentDepartment = reportWithIterator.next().value;
  while (currentDepartment) {
    const employees = currentDepartment[1];
    for (const employee of employees) {
      result += employee + ' | ';
    }
    currentDepartment = reportWithIterator.next().value;
  }
  // Remove the trailing ' | ' characters
  result = result.slice(0, -3);
  return result;
}
