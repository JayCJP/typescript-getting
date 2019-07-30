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
