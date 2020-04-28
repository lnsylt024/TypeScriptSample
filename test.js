"use strict";
var msg = "Hello World";
console.log("message", msg);
var words = "\u3053\u306B\u3061\u306F\uFF01" + msg;
console.log("words", words);
var flag = true;
console.log("flag", flag);
var arr_number = [1, 2, 3];
console.log("arr_number", arr_number);
console.log("arr_number[1]", arr_number[1]);
var arr_arr_number = [1, 2, 3, 4];
console.log("arr_arr_number", arr_arr_number);
var arr_arry_string = ["A", "B", "C"];
console.log("arr_arry_string", arr_arry_string);
console.log("arr_arry_string[1]", arr_arry_string[1]);
var x;
x = ["Runoob", 11];
console.log("x", x);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
console.log("c", c);
function hello() {
    alert("Hello Runoob");
}
//Any
var y = 1;
y = "I am Who I am";
console.log("y", y);
y = false;
console.log("y", y);
var arrayList = [1, false, "fine"];
console.log("arrayList[0]", arrayList[0]);
console.log("arrayList[1]", arrayList[1]);
console.log("arrayList[2]", arrayList[2]);
//Null and Undefined
var z;
z = 1;
console.log(z);
//z = undefined;  //Exception
//console.log(z);
z = null;
console.log(z);
//Never
var o;
var p;
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
function error(message) {
    throw new Error(message);
}
//Example
var getValue = function () {
    return 0;
};
var list;
(function (list) {
    list[list["A"] = getValue()] = "A";
    list[list["B"] = 2] = "B";
    list[list["C"] = 3] = "C";
})(list || (list = {}));
console.log("list.A", list.A);
console.log("list.B", list.B);
console.log("list.C", list.C);
