import Car from './10-car';

export class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    const clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    return clone;
  }
}

export class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    const clone = super.cloneCar();
    Object.setPrototypeOf(clone, Car.prototype);
    return clone;
  }
}
