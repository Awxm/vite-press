let isDone = false;
let count = 10;
let names = "Semliker";
let list = [1, 2, 3];
let lists = [1, 2, 3]; // Array<number>泛型语法
var Direction;
(function (Direction) {
    Direction[Direction["NORTH"] = 0] = "NORTH";
    Direction[Direction["SOUTH"] = 1] = "SOUTH";
    Direction[Direction["EAST"] = 2] = "EAST";
    Direction[Direction["WEST"] = 3] = "WEST";
})(Direction || (Direction = {}));
var Directions;
(function (Directions) {
    Directions[Directions["NORTH"] = 3] = "NORTH";
    Directions[Directions["SOUTH"] = 4] = "SOUTH";
    Directions[Directions["EAST"] = 6] = "EAST";
    Directions[Directions["WEST"] = 7] = "WEST";
})(Directions || (Directions = {}));
var Directionss;
(function (Directionss) {
    Directionss["NORTH"] = "NORTH";
    Directionss["SOUTH"] = "SOUTH";
    Directionss["EAST"] = "EAST";
    Directionss["WEST"] = "WEST";
})(Directionss || (Directionss = {}));
let notSure = 666;
notSure = "Semlinker";
notSure = false;
let tupleType;
tupleType = ["Semlinker", true];
function warnUser() {
    console.log("This is my warning message");
}
let unusable = undefined;
list = undefined;
function error(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) { }
}
function controlFlowAnalysisWithNever(foo) {
    if (typeof foo === "string") {
        // 这里 foo 被收窄为 string 类型
    }
    else if (typeof foo === "number") {
        // 这里 foo 被收窄为 number 类型
    }
    else {
        // foo 在这里是 never
        const check = foo;
    }
}
let someValue = "this is a string";
let strLength = someValue.length;
const c2 = {
    name: 'John',
    age: 18,
};
class SpaceRepeatingPadder {
    constructor(numSpaces) {
        this.numSpaces = numSpaces;
    }
    getPaddingString() {
        return Array(this.numSpaces + 1).join(" ");
    }
}
let padder = new SpaceRepeatingPadder(6);
if (padder instanceof SpaceRepeatingPadder) {
    // padder的类型收窄为 'SpaceRepeatingPadder'
}
function isNumber(x) {
    return typeof x === "number";
}
function isString(x) {
    return typeof x === "string";
}
isNumber('number');
let IdGenerator;
function createUserId(name, id) {
    return name + id;
}
const staff = {
    id: 'E1006',
    age: 33,
    companyId: 'EFT'
};
console.dir(staff);
class Course {
    //定义实现签名
    begin(name, score) {
        if (typeof name === 'string' || typeof score === 'string') {
            return 'student:' + name + ':' + score;
        }
    }
}
const course = new Course();
course.begin(111, 5); //没有输出
course.begin('zhangsan', 5); //student:zhangsan:5
course.begin(5, 'zhangsan'); //student:5:zhangsan
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
const aaa = { size: 10, label: "Size 10 Object" };
printLabel(aaa); // Error
