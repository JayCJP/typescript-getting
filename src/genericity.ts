// 泛型
// 不预先确定的数据类型，具体的数据类型在使用的时候才确定

function log<T>(value: T):T {
    console.log(value)
    return value
}

log<string[]>(['a', 'b'])
log<number>(1)
// 类型推断
log(2)

// 类型别名
type Log = <T>(value: T) => T
// 方法的实现
let myLog: Log = (v) => {
    console.log(v)
    return v
}
myLog('haha')

// 泛型接口

// 泛型约束某个属性
interface Loga {
    <T>(value:T): T
}
let mylog2: Loga = (value) => {
    console.log(value)
    return value
};
mylog2(1)


// 泛型约束整个接口，需要在实现时注明参数的类型
interface Logb<T> {
    (value:T): T
}
let mylog3: Logb<number> = (value) => {
    console.log(value)
    return value
};
mylog3(1)

// 泛型类
class Logc<T> {
    // static point(flag: T) {} // not ok 泛型不能应用于类的静态成员
    run (value: T) {
        console.log(value)
        return value
    }
}

let logc = new Logc<number>()
logc.run(1)
let logd = new Logc()
logd.run({a: 1})

// 泛型约束
interface Length {
    length: number
}
function logf<T extends Length> (value: T): T {
    console.log(value, value.length)
    return value
}
logf('123')
logf([])
// logf(1) // not ok 没有 length 属性

// 函数和类可以轻松的支持多种类型，增强程序的扩展性
// 避免冗长的联合类型声明，增强代码的可读性
// 灵活控制类型之间的约束
