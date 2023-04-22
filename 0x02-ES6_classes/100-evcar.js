const carBrand = Symbol('brand');
const carMotor = Symbol('motor');
const carColor = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this[carBrand] = brand;
    this[carMotor] = motor;
    this[carColor] = color;
  }

  cloneCar() {
    return new Car(this[carBrand], this[carMotor], this[carColor]);
  }

  get brand() {
    return this[carBrand];
  }

  get motor() {
    return this[carMotor];
  }

  get color() {
    return this[carColor];
  }
}

export class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    return new Car(this[carBrand], this[carMotor], this[carColor]);
  }

  get range() {
    return this._range;
  }

  static get [Symbol.species]() {
    return Car;
  }
}
