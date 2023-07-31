"use strict";

class Figure3D {
  constructor(name) {
    if (this.constructor === Figure3D) {
      throw new Error("You cannot create instance in this abstract class");
    }
    if (typeof name !== "string") {
      throw new TypeError("name must be string");
    }
    this._name = name.trim();
  }
  set name(name) {
    if (typeof name !== "string") {
      throw new TypeError("name is not srting");
    }
    this._name = name.trim();
  }
  getVolume() {}
}

class Sphere extends Figure3D {
  #radius;
  constructor(radius) {
    super("Sphere");
    this.#radius = radius;
  }
  set radius(radius) {
    if (
      typeof radius !== "number" ||
      Number.isNaN(radius) ||
      Number.isFinite(radius) === false
    ) {
      throw new TypeError("radius must be a number");
    }
    if (radius <= 0) {
      throw new RangeError("radius must be positive");
    }
    this.#radius = radius;
  }
  getVolume() {
    return (4 / 3) * Math.PI * Math.pow(this.#radius, 3);
  }
}

class Cube extends Figure3D {
  #side;
  constructor(side) {
    super("Cube");
    this.#side = side;
  }
  set side(side) {
    if (
      typeof side !== "number" ||
      Number.isNaN(side) ||
      Number.isFinite(side) === false
    ) {
      throw new TypeError("side must be a number");
    }
    if (side <= 0) {
      throw new RangeError("side must be positive");
    }
    this.#side = side;
  }
  getVolume() {
    return this.#side * 3;
  }
}

class Cylinder extends Figure3D {
  #radius;
  #height;
  constructor(radius, height) {
    super("Cylinder");
    this.#radius = radius;
    this.#height = height;
  }
  set radius(radius) {
    if (
      typeof radius !== "number" ||
      Number.isNaN(radius) ||
      Number.isFinite(radius) === false
    ) {
      throw new TypeError("radius must be a number");
    }
    if (radius <= 0) {
      throw new RangeError("radius must be positive");
    }
    this.#radius = radius;
  }
  set height(height) {
    if (
      typeof height !== "number" ||
      Number.isNaN(height) ||
      Number.isFinite(height) === false
    ) {
      throw new TypeError("height must be a number");
    }
    if (height <= 0) {
      throw new RangeError("height must be positive");
    }
    this.#height = height;
  }
  getVolume() {
    return Math.PI * (this.#radius * 2) * this.#height;
  }
}

try {
  const footballBall = new Sphere(1);
  const strangeBook = new Cube(4);
  const glassVase = new Cylinder(0.25, 4);

  console.log(footballBall);
  console.log(footballBall.getVolume());
  console.log(strangeBook);
  console.log(strangeBook.getVolume());
  console.log(glassVase);
  console.log(glassVase.getVolume());
  logVolume3DFigure(footballBall);
  logVolume3DFigure(strangeBook);
  logVolume3DFigure(glassVase);
} catch (error) {
  alert("ERROR");
}

function getVolume3DFigure(figure) {
  return figure.getVolume();
}
function logVolume3DFigure(figure) {
  console.log(
    "Volume of this",
    figure._name.toLowerCase(),
    "is",
    figure.getVolume()
  );
}
