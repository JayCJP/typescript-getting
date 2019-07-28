let hello : string = 'hello jay';
// 原始类型
let bool: boolean = true;
let num: number = 123;
let str: string = '123';
// 联合类型
let sum: number | string | undefined = 1;


// 数组
let arr1: number[] = [1, 2, 3]
// Array 是 TypeScript 提供的一个泛型接口
// 可以定义多个类型的数组元素
let arr2: Array<number | string> = [1, 2, 'a', 1];


// 元组
// 特殊的数组类型，限定了数组元素的类型和个数
let tuple: [number, string] = [1, 'a'];
// 它是不允许越界的
tuple.push('b') // [1, 'a', 'b']
console.log(tuple)
// tuple[2] // 编辑器会提示错误


// 函数
let add = (x: number, y: number) => x + y;
// 定义一个函数类型, 没有具体的实现方法
let compute: (j: number, z: number) => number;
// 这里参数可以和上面的定义不一样，但类型是一样的
compute = (a, b) => a + b;


// 对象
let obj: object = { x: 1, y: 2}
// 这种方法是不允许的
// obj.x = 3; // error


// 正确的写法应该要定义对象的类型
let obj2: { x: number, y: number } = { x: 1, y: 2}
obj2.x = 3; // ok


// symbol
let s1: symbol = Symbol();
let s2 = Symbol();


// undefined & null
// 官方介绍这两个类型是所有类型的子类型，可以被赋值给其他类型
let un: undefined = undefined;
let nu: null = null;
// tips: 需要在 tsconfig.json 中将选项 strictNullChecks 设置为 false，才可以通过类型检查
// num = undefined;
// tips: 当 strictNullChecks 为 true 的时候, 联合类型可以通过类型检查
sum = undefined;


// void , 没有返回值
let noReturn = () => {}


// any , 任意类型
let x;
x = 1
x = []
x = () => {}


// never, 永远不会有返回值的类型
// 抛出错误， 不会有返回值
let error = () => {
    throw new Error('错误')
}
// 死循环 不会有返回值
let endless = () => {
    while(true) {}
}


// 枚举：一组有名字的常量集合
enum Role {
    Reporter,
    Developer,
    Owner
}
console.log(Role)

// 字符串枚举
enum Message {
    Success = '保存成功！',
    Error = '操作失败'
}
// 异构枚举
enum Answer {
    N,
    Y = 'Yes'
}

// http://www.typescriptlang.org/play/index.html

// 枚举属性为自读属性，不允许修改
// 常量枚举
// 1. 没有初始值
// 2. 对已有枚举成员的引用
// 3. 常量的表达式，会在编译的时候计算出结果，以常量的形式出现在运行时环境
// 非常量的表达式
// 不会再编译时候计算结果，而会保留到运行时动态计算结果
enum Char {
    // const
    a,
    b = Char.a,
    // computed
    c = Math.random(),
    e = '123'.length,
    f = 5 // 再 computed enum 后面一定要，给 enum 属性设置初始值
}
console.log(Char)

// 常量枚举
// 特性：会在编译时被移除
// 作用：当我们不需要一个对象，而需要对象的值的时候
const enum Month {
    Jan,
    Feb,
    Mar
}
let mon = [Month.Jan, Month.Feb, Month.Mar]
console.log(mon) // [1, 2, 3]



// 枚举类型
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banner' }

// 枚举类型的赋值可以超出枚举的定义
let e: E = 3;
let f: F = 3;
console.log(e) 
// e === f // 不同的枚举类型之间时不可以比较的

let e1: E.a = 1;
let e2: E.b;
let e3: E.a = 1;
e1 === e3; // true
console.log(e1 === e3)

// 字符串枚举的取值只能是枚举的类型
let g1: G = G.a // 或 G.b
let g2: G.a = G.a // 只能是枚举类型的自身

// 示例

function initByRole (role: number) {
    if (role == Role.Developer) {
        console.log('我是开发者')
    } else if (role === Role.Reporter) {
        console.log('我是记者')
    }
}
initByRole(0)
initByRole(1)

// 接口
// 可以用来约束 函数，对象，类的结构和类型


