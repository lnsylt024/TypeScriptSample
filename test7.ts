class Shape {
  Area: number;
  constructor(a: number) {
    this.Area = a;
  }
}
class Circle extends Shape {
  disp(): void {
    console.log("area", this.Area);
  }
}

var shape = new Circle(223);
shape.disp();
