﻿function parseCount (changeNumber) {
  let parse = Number.parseFloat(changeNumber)
  if (Number.isNaN(parse)) {
    throw new Error('Невалидное значение')
  }
  return parse
}

function validateCount (changeNumber) {
  let parse
  try {
    parse = parseCount(changeNumber)
    return parse
  } catch (error) {
    return error
  }
}

//exe2

class Triangle{
    constructor(a, b, c){
        if (a+b<=c || a+c<=b || b+c<=a){
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    get perimeter(){
        return this.a+this.b+this.c;
    }
    get area(){
        let p = this.perimeter/ 2;
        let area = Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c));
        return parseFloat(area.toFixed(3));
    }
   
}
// let trio = new Triangle(2,5,5)
// alert (trio.perimeter)