//constructor
var myFuncation = new Function("a", "b", "return a * b");
var x = myFuncation(4, 3);
console.log("x", x);

//Call Self Funcation
function factorial(number) {
  if (number <= 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}
console.log("factorial(6)", factorial(6));

//()=>{} funcation
//example1
var foo = (x: number) => 10 + x;
console.log("foo(100)", foo(100));

//example2
var foo2 = (x: number) => {
  x = 10 + x;
  console.log("foo2(100)", x);
};
foo2(100);

//example3
var func = (x) => {
  if (typeof x == "number") {
    console.log("x", "number");
  } else if (typeof x == "string") {
    console.log("x", "string");
  }
};
func(12);
func("Tom");
