var msg: string = "Hello World";
console.log("message", msg);

let words: string = `こにちは！${msg}`;
console.log("words", words);

let flag: boolean = true;
console.log("flag", flag);

let arr_number: number[] = [1, 2, 3];
console.log("arr_number", arr_number);
console.log("arr_number[1]", arr_number[1]);

let arr_arr_number: Array<number> = [1, 2, 3, 4];
console.log("arr_arr_number", arr_arr_number);

let arr_arry_string: Array<string> = ["A", "B", "C"];
console.log("arr_arry_string", arr_arry_string);
console.log("arr_arry_string[1]", arr_arry_string[1]);

let x: [string, number];
x = ["Runoob", 11];
console.log("x", x);

enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Blue;
console.log("c", c);

function hello(): void {
  alert("Hello Runoob");
}

//Any
let y: any = 1;
y = "I am Who I am";
console.log("y", y);
y = false;
console.log("y", y);

let arrayList: any[] = [1, false, "fine"];
console.log("arrayList[0]", arrayList[0]);
console.log("arrayList[1]", arrayList[1]);
console.log("arrayList[2]", arrayList[2]);

//Null and Undefined
let z: number | null;
z = 1;
console.log(z);
//z = undefined;  //Exception
//console.log(z);
z = null;
console.log(z);

//Never
let o: never;
let p: number;
//o = 123;         //Exception
//console.log("o", o);
/*
o = (() => {
  throw new Error("exception");  //Exception
})();
console.log("o", o);
*/
/*
p = (() => {
  throw new Error("exception");
})();
console.log("p", p);
*/
function error(message: string): never {
  throw new Error(message);
}

//Example
const getValue = () => {
  return 0;
};
enum list {
  A = getValue(),
  B = 2,
  C,
}
console.log("list.A", list.A);
console.log("list.B", list.B);
console.log("list.C", list.C);
