class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get  area() {
    return this.calcArea()
  }
  //  使用set报错。
   setWidth(width){
    this.width = width;
  }
  calcArea() {
    return this.height * this.width;
  }
}
 square = new Polygon(10, 10);

// 100
console.log(square.width);
square.setWidth(1000);
console.log(square.width);
console.log(square.width);
