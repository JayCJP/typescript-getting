// advanced 类型
let obj3 = {
  a: 1,
  b: 2
}

function getValues(obj: any, keys: string[]) {
  return keys.map((ky: string) => obj[ky])
}

getValues(obj, ['a', 'b'])
getValues(obj, ['ddd']) // 允许执行没有被约束

// keyof T
// T[k]
// T extend U
interface obj4 {
  a: number
  b: number
  c: number
  d: number
}
// 索引类型
let key: keyof obj4
let value: obj4['a']

function getValues2<T>(obj: T, keys: (keyof T)[]) {
  return keys.map(ky => obj[ky])
}

// getValues2(obj3, ['a', 'b', 'dd']) // 不允许获取对象obj3之外的key

function getValues3<T, K extends keyof T>(obj: T, keys: K[]) {
  return keys.map(ky => obj[ky])
}

// getValues3(obj3, ['a', 'b', 'dd']) // 报错

// 映射类型
type readonlyobj = Readonly<obj4>
type partialObj = Partial<obj4>
type pickobj = Pick<obj4, 'a'|'b'>
type recordobj = Record<'q' | 'j', obj4>

// 条件类型

type key1<T> = T extends obj4 ? number : T extends string ? 'a' : string

let kk: key1<1> = '123'


type aa = 'a'|'b'|'c'|'d'
type bb = 'a'|'c'

/**
 * Exclude from T those types that are assignable to U
 */
//  type Exclude<T, U> = T extends U ? never : T;

 /**
  * Extract from T those types that are assignable to U
  */
//  type Extract<T, U> = T extends U ? T : never;
 
 /**
  * Obtain the return type of a function type
  */
//  type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
 

// 从T中过滤掉可以赋值给U的类型
type t1 = Exclude<aa, bb> // 'b'|'d'
// 从T中取出可以赋值给U的类型
type t2 = Extract<aa, keyof typeof obj3>
// 从T中除去 undefined 和 null
type t3 = NonNullable<obj4>
// 获取函数的返回值类型
type t4 = ReturnType<typeof getValues3>