class Dog {
    constructor (name: string, public age: number) {
        this.name = name;
        this.age = age;
    }
    // 类的修饰符
    public name: string
    private pri () {}
    protected pro () {}
    readonly legs: number = 4
    // 只能通过类名来调用
    static food: string = 'bones'
    run () {}
}

// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
// protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的

console.log(Dog.prototype)

let dog = new Dog('aa', 4)
console.log(dog)

// 类的继承
class Husky extends Dog {
    constructor (name: string, color: string) {
        super(name, 2)
        this.color = color
    }
    
    color: string
    // 存取器
    get hair () {
        return 'jjj'
    }
    set hair (value) {
        console.log('setter', value)
    }
}
const husky = new Husky('hhh', 'black')
console.log(husky)
console.log(husky.hair)
husky.hair = 'red';


// 抽象类
// 抽象类不允许被实例化，抽象方法必须在子类中实现
abstract class Animal {
    public name: string;
    constructor (name: string) {
        this.name = name
    }
    public abstract sayhi():void;
}

class Cat extends Animal {
    public sayhi () {
        console.log(`cat ${this.name} say hi`)
    }
    public eat () {
        console.log(`${this.name} is eating`)
    }
}

let cat = new Cat('kitty')
cat.sayhi()

// 多态
abstract class Laugh {
    abstract mouth(): void;
}

class Hehe extends Laugh {
    mouth () {
        console.log('he he')
    }
}

class Xixi extends Laugh {
    mouth () {
        console.log('xi xi')
    }
}
let xiao: Laugh[] = [new Hehe(), new Xixi()]

xiao.forEach(i => {
    i.mouth()  
});

// this
class WorkFlow {
    step1 () {
        return this
    }

    step2 () {
        return this
    }
}
new WorkFlow().step1().step2()

class MyFlow extends WorkFlow {
    next () {
        return this
    }
}
// this 指向可以保证父子之间的调用连贯性
new MyFlow().next().step1().next().step2();



// 类实现接口
// 实现（implements）是面向对象中的一个重要概念。
// 一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，
// 这时候就可以把特性提取成接口（interfaces），用 implements 关键字来实现。这个特性大大提高了面向对象的灵活性
// 多个接口的实现用逗号隔开 implements a, b, c
// 类在实现接口的时候，必须声明接口中的所有属性
// 接口自能约束类的共有成员
// 接口不能约束类的构造函数
interface Alarm {
    alert():void;
}
class Door {
    open(){
        console.log('open')
    }
    close () {
        console.log('close')
    }
}

class SecurityDoor extends Door implements Alarm {
    alert () {
        console.log('scurity door alert')
    }
}

class Car implements Alarm {
    alert () {
        console.log('car alert')
    }
    logo () {}
}

// new Alarm() // not ok

const car = new Car()
const securityDoor = new SecurityDoor();

console.log(car)
car.alert()
console.log(securityDoor)
securityDoor.alert()

// 接口继承接口
// 接口与接口之间也可以是继承关系
interface Book {
    page():number;
}

interface Notebook extends Book {
    size():String;
}


class Story implements Notebook {
    page () {
        return 100
    }
    size () {
        return 'A5'
    }
}
const story = new Story()
console.log(story)

// 接口继承类
class Point {
    x: number;
    y: number;
}
interface Point3D extends Point {
    z: number
}

let point3d: Point3D  = {
    x: 1,
    y: 1,
    z: -5
}

// 混合类型
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    return source.search(subString) !== -1
}
