export class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  toString() {
    return `${this._location} - ${this._size}`;
  }

  valueOf() {
    return this._size;
  }
}

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.size} - ${this._holbertonClass.location}`;
  }
}

export const class2019 = new HolbertonClass(2019, 'San Francisco');
export const class2020 = new HolbertonClass(2020, 'San Francisco');

export const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
export const student2 = new StudentHolberton('John', 'Doe', class2020);
export const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
export const student4 = new StudentHolberton('Donald', 'Bush', class2019);
export const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

export const listOfStudents = [student1, student2, student3, student4, student5];
