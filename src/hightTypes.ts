// 交叉类型和联合类型
interface Dog1 {
  run(): void;
}
interface Cat1 {
  jump(): void;
}
// 交叉类型
let pet: Cat1 & Dog1 = {
  run () {},
  jump () {}
}

// 联合类型
let lh: number | string = 1;
let lh1: 'a' | 'b' = 'a';
let lh2: 1 | 2 = 1;

class Dog2 implements Dog1 {
  run () {}
  eat () {}
}

class Dog3 implements Cat1 {
  jump () {}
  eat () {}
}

enum Master { Boy, Girl }
function getType (master: Master) {
  let pet = master === Master.Boy ? new Dog2() : new Dog3();
  pet.eat(); // ok
  // pet.run() error 只能调用所有类型的共同属性
  return pet;
}

// 根据共同的属性，创建类型保护区块
interface Square {
  kind: 'square',
  size: number
}
interface Rectangle {
  kind: 'rectangle'
  width: number,
  heigt: number
}
interface Circle {
  kind: 'circle'
  r: number
}


type Shape = Square | Rectangle | Circle
function area (s: Shape) {
  switch (s.kind) {
    case 'square':
      return s.size * s.size
    case 'rectangle':
      return s.width * s.heigt
    case 'circle':
      return Math.PI * s.r ** 2
    default:
      return ((e: never) => {throw new Error(e)})(s)
  }
}

console.log(area({
  kind: 'circle',
  r: 1
}))