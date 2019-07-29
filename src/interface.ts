// 接口
// 可以用来约束 函数，对象，类的结构和类型

interface List {
  id: number,
  name: string,
  // 字符串索引签名
  [x: string]: any
  // '?' 表示属性可有可无
  age?: number,
  // 自读属性
  // readonly userId: number
}

interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach((v, i) => {
    console.log(v, i)
    if (v.age)
      console.log
  })
}

let result = {
  data: [
    {id: 1, name: 'jay', age: 22},
    {id: 2, name: 'cerien'}
  ]
}

render(result)
// 类型断言， 绕过类型检查 end

// 当你不知道接口属性的个属性的时候， 就可以使用可索引类型的接口，[x: string]: any

// 数字索引接口
// 用任意数字索引 'StringArray' 都会得到一个 string
interface StringArray {
  [index: number]: string
}

let chars1: StringArray = ['a', 'b']
console.log(chars1)

// 字符串索引接口
// 用任意字符串索引 'Names' 都会得到一个 string
interface Names {
  [x: string]: string, // any
  // y: number // no
  [z: number]: string // ok, 数字索引的签名返回值，一定要是字符串签名索引的子类型
}

let myName2: Names = {
  one: 'jay',
  2: 'cerien'
}
console.log(myName2)


// 用接口定义函数
// let add: (x: number, y: number) => number
// interface Add {
//   (x: number, y: number): number
// }

// 类型别名
type Add = (x: number, y: number) => number
let addFx: Add = (a, b) => a + b
console.log(addFx(1, 2)) // 3

// 混合接口
// 一个接口即可定义为对象，也可以像对象一样拥有属性和方法
interface Lib {
  (): void;
  version: string;
  doSth(): void
}

function getLib () {
  let lib: Lib = (() => {}) as Lib; // 断言，避免类型检查，提示缺少属性 
  lib.version = '1.0.0'
  lib.doSth = () => {
    console.log(lib.version)
  }

  return lib
}

let lib1 = getLib();
lib1();
lib1.doSth()

// 函数的定义
function add1 (x: number, y: number) {
  return x + y
}
// 以下三种并没对函数体的实现，只是定义了函数的类型，调用时需要实现函数体
let add2: (x: number, y: number) => number;
// 类型别名
type add3 = (x: number, y: number) => number;
// 用接口定义
interface add4 {
  (x: number, y: number): number
}

// ts 中对函数参数的要求
// 可选参数必须位于必选参数之后
function add5 (x: number, y?: number) {
  return y ? x + y : x
}
add5(1)

// 在必须的参数前，默认参数是不可以省略的，必须明确的传入 undefined
function add6 (x: number, y = 2, z: number, q = 1) {
  return x + y + z + q
}
add6(1, undefined, 3)

// 当参数不确定是，可以使用剩余参数， 参数的类型必须是数组
function add7 (x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur)
}
add7(1, 2, 3, 3)

// 函数重载，
function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]): any {
  let first = rest[0]
  if (typeof first === 'string') {
    return rest.join('-')
  } else if (typeof first === 'number') {
    return rest.reduce((pre, cur) => pre + cur)
  }
}
console.log(add8(1, 2, 3))
console.log(add8('1', '2', '3'))