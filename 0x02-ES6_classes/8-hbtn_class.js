class HolbertonClass {
  constructor(size, location) {
    this._size = typeof size === 'number' ? size : 0;
    this._location = typeof location === 'string' ? location : '';
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = typeof value === 'number' ? value : 0;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    this._location = typeof value === 'string' ? value : '';
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
