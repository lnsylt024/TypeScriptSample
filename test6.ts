interface IParent1 {
  v1: number;
}
interface IParent2 {
  v2: number;
}
interface Child extends IParent1, IParent2 {
  v3: number;
}
var Iobj: Child = {
  v1: 12,
  v2: 23,
  v3: 50,
};
console.log("Value1:", Iobj.v1);
console.log("Value2:", Iobj.v2);
console.log("Value3:", Iobj.v3);

//Example2
interface Person {
  age: number;
}
interface Musician extends Person {
  instrument: string;
}
var drummer = <Musician>{};
drummer.age = 27;
drummer.instrument = "Drums";
console.log("age", drummer.age);
console.log("instrument", drummer.instrument);
