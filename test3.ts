var num: number = 5;
var i: number;
var factorial = 1;
for (i = num; i >= 1; i--) {
  factorial = factorial * i;
}
console.log(factorial);

var j: any;
var n: any = "a b c";
for (j in n) {
  console.log(n[j]);
}

let someArray = [1, "string", false];
for (let entry of someArray) {
  console.log(entry);
}

let list = [4, 5, 6];
list.forEach((val, index, array) => {
  console.log(index + "," + val + ",[" + array + "]");
});

list.every((val, index, array) => {
  console.log(index + "," + val + ",[" + array + "]");
  if (index > 5) {
    return true; // contrinues
  } else {
    return false; // break
  }
});

function greet(): string {
  return "hello world";
}

//隠し引数
function caller(title?: string) {
  var msg = greet();
  if (title) {
    console.log("title", title + "," + msg);
  } else {
    console.log("msg", msg);
  }
}
caller();
caller("abc");

//NoName function、Auto Run...
(function () {
  var x = "Hello!!";
  console.log(x);
})();
