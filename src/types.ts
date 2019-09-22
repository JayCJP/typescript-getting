/*
类型推断
不需要指定变量的类型（函数的返回值类型），TypeScript 可以根据某些规则自动的为其推断出一个数据类型

· 基本类型推断
· 最佳通用类型推断
· 上下文类型推断
*/

let a = 1;
let bt = [1, null];
let c = (x =1) => x;

// 上下文类型推断
window.onkeydown = (event: Event) => {
  // event.
}

interface Foo {
  bar: number
}
let foo = {} as Foo;
let foo2: Foo = {
  bar: 11
};


// 类型的兼容性
let ss: string = 'a';
ss = null;

// 接口的兼容性
interface X {
  a: number,
  b: number
}
interface Y {
  a: number,
  b: number,
  z: number
}
let xx: X = { a: 1, b: 2 };
let yy: Y = { a: 1, b: 2, z: 2 };
xx = yy;
// yy =xx;
// 原类型必须具备目标类型的所有属性
// 成员少的可以兼容成员多的

// 函数的兼容性
type Handler = (a: number, b: number) => void;
function hef (handler: Handler) {
  return handler;
}

// 1. 参数个数
let handler1 = (a:number) => {};
hef(handler1);
let handler2 = (a:number, b:number, c:number) => {};
// hef(handler2); error, 参数可以少不可以多

// 可选参数和剩余参
let aa = (p1: number, p2: number ) => {}; // 固定参数
let bb = (p1?: number, p2?: number ) => {}; // 可选参数
let cc = (...args: number[] ) => {}; // 剩余参数
aa = bb;
aa = cc;
// "strictFunctionTypes": true,
bb = aa;
bb = cc;

cc = aa;
cc = bb;

// 2. 参类型必须要匹配
let handler3 = (a: string) => {};
// hef(handler3) error 参数类型不同

interface Point3D {
  x: number,
  y: number,
  z: number,
}
interface Point2D {
  x: number,
  y: number
}

let p2d = (p: Point2D) => {}
let p3d = (p: Point3D) => {}
p3d = p2d
// p2d = p3d ,error
// "strictFunctionTypes": false,
// p2d = p3d , ok
// 成员多的可以兼容成员少的

// 3. 返回值类型
// 目标函数的返回值类型必须与原类函数的返回值类型保持一致
let ff = () => ({name: 'jay'})
let gg = () => ({name: 'jay', a: 1})
ff = gg;
// gg = ff; error, 

// 函数的重载
function overload(a: number, b: number):number;
function overload(a: string, b: string):string;
function overload(a: any, b: any):any {}

//  枚举类型的兼容性
enum Fruit { apple, banana }
enum Color { red, blue }
let wa:Fruit.apple = 3;
// 数组类型与枚举类型兼容
let na: number = Fruit.apple;
// 枚举类型直接是不兼容的
// let co: Color.red = Fruit.app， error

// 类的兼容性
class A {
  constructor(a: number, q: number) {}
  id: number = 1
  private name = 'jay'
}
class B {
  static s = 1;
  constructor(a:number) {}
  id: number = 2
  private name = 'jay'
}

let aa1 = new A(1, 3)
let bb1 = new B(1)
// aa1 = bb1;
// bb1 = aa1;
// 如果带有私有属性，是互不兼容的，
// 但是子类可以
class A1 extends A {
  constructor (a: number, q: number) {
    super(a, q)
  }
}
let a1 = new A1(1, 2);
a1 = aa1;
aa1 = a1;

// 泛型的兼容性
interface Em<T> {
  value: T
}
let obj1: Em<string> = { value: 'jay'}
let obj22: Em<number> = { value: 1 }
// obj1 = obj22; error

let log1 = <T>(x: T) => x;
let log2 = <U>(y: U) => y;
log1 = log2

// 
// 当一个类型 Y 可以被赋值给另一个类型 X 时，我们就可以说类型 X 兼容类型 Y
// x 兼容 y  目标类型 = 原类型
/**
 * 结构之间兼容：成员少的兼容成员多的
 * 函数之间兼容：参数多的兼容参数少的
 */

// 类型的保护
/**
 * TypeScript 能够在特定的区块中保证变量属于某种确定的类型
 * 可以在此区块中放心的引用此类型的属性，或者调用方法
 */
enum From { strong, weeked }
 
class Datetime {
  getDatetime () {
    return 1
  }
  time: any
}
class Dateday {
  getDateday () {
    return 1
  }
  day: any
}

function isDay (lang: Datetime|Dateday): lang is Datetime {
  return (lang as Datetime).getDatetime !== undefined
}

function getlang (type: From, x: string|number) {
  let lang = type === From.strong ? new Datetime() : new Dateday()
  // 类型断言
  // if ((lang as Dateday).getDateday) {
  //   (lang as Dateday).getDateday();
  // } else {
  //   (lang as Datetime).getDatetime();
  // }

  // instanceof
  // if (lang instanceof Datetime) {
  //   lang.getDatetime()
  // } else {
  //   lang.getDateday()
  // }

  // in
  // if ('time' in lang) {
  //   lang.getDatetime()
  // } else {
  //   lang.getDateday()
  // }

  // typeof
  // if (typeof x === 'string') {
  //   x.length;
  // } else {
  //   x.toFixed(2);
  // }

  // isDay 函数判断
  // if (isDay(lang)) {
  //   lang.getDatetime()
  // } else {
  //   lang.getDateday()
  // }

}