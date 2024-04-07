let isDone: boolean = false;
let count: number = 10;
let names: string = "Semliker";
let list: number[] = [1, 2, 3];
let lists: Array<number> = [1, 2, 3]; // Array<number>泛型语法
enum Direction {
    NORTH,
    SOUTH,
    EAST,
    WEST,
  }
  enum Directions {
    NORTH = 3,
    SOUTH,
    EAST=6,
    WEST,
  }
  enum Directionss {
    NORTH = "NORTH",
    SOUTH = "SOUTH",
    EAST = "EAST",
    WEST = "WEST",
  }
  let notSure: any = 666;
notSure = "Semlinker";
notSure = false;
let tupleType: [string, boolean];
tupleType = ["Semlinker", true];
function warnUser(): void {
    console.log("This is my warning message");
  }
  let unusable: void = undefined;
  list=undefined


  function error(message: string): never {
    throw new Error(message);
  }
  
  function infiniteLoop(): never {
    while (true) {}
  }
  type Foo = string | number;

function controlFlowAnalysisWithNever(foo: Foo) {
  if (typeof foo === "string") {
    // 这里 foo 被收窄为 string 类型
  } else if (typeof foo === "number") {
    // 这里 foo 被收窄为 number 类型
  } else {
    // foo 在这里是 never
    const check: never = foo;
  }
}

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;


type A2 = { name: string };
type B2 = { age: number };
type C2 = A2 | B2;
const c2: C2 = {
  name: 'John',
  age: 18,
}


interface Padder {
    getPaddingString(): string;
  }
  
  class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) {}
    getPaddingString() {
      return Array(this.numSpaces + 1).join(" ");
    }
  }
  let padder: Padder = new SpaceRepeatingPadder(6);
  
  if (padder instanceof SpaceRepeatingPadder) {
    // padder的类型收窄为 'SpaceRepeatingPadder'
  }

  function isNumber(x: any): x is number {
    return typeof x === "number";
  }
  
  function isString(x: any): x is string {
    return typeof x === "string";
  }
  
  isNumber('number')

type Msg={
a:String,
b:String,
}
 
let IdGenerator: (chars: string, nums: number) => string;

function createUserId(name: string, id: number): string {
  return name + id;
}




  interface IPerson {
    id: string;
    age: number;
  }
  
  interface IWorker {
    companyId: string;
  }
  
  type IStaff = IPerson & IWorker;
  
  const staff: IStaff = {
    id: 'E1006',
    age: 33,
    companyId: 'EFT'
  };
  
  console.dir(staff)
  
  type Combinable = number | string;
class Course {
   //定义重载签名
   begin(name: number, score: number): string;
   begin(name: string, score: string): string;
   begin(name: string, score: number): string;
   begin(name: number, score: string): string;
   //定义实现签名
   begin(name: Combinable, score: Combinable) {
       if (typeof name === 'string' || typeof score === 'string') {
           return 'student:' + name + ':' + score; 
       }
   }
}
 
const course = new Course();
course.begin(111, 5);//没有输出
course.begin('zhangsan', 5);//student:zhangsan:5
course.begin(5, 'zhangsan');//student:5:zhangsan



interface LabeledValue {
    label: string;
  }
  function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
  }
  const aaa={ size: 10, label: "Size 10 Object" }
  printLabel(aaa); // Error
  

  interface userInfo {
    name: string
    age: number
  }
  type keyofValue = keyof userInfo
  // keyofValue = "name" | "age"