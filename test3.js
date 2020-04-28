"use strict";
var num = 5;
var i;
var factorial = 1;
for (i = num; i >= 1; i--) {
    factorial = factorial * i;
}
console.log(factorial);
var j;
var n = "a b c";
for (j in n) {
    console.log(n[j]);
}
var someArray = [1, "string", false];
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var entry = someArray_1[_i];
    console.log(entry);
}
var list = [4, 5, 6];
list.forEach(function (val, index, array) {
    console.log(index + "," + val + ",[" + array + "]");
});
list.every(function (val, index, array) {
    console.log(index + "," + val + ",[" + array + "]");
    if (index > 5) {
        return true; // contrinues
    }
    else {
        return false; // break
    }
});
function greet() {
    return "hello world";
}
//隠し引数
function caller(title) {
    var msg = greet();
    if (title) {
        console.log("title", title + "," + msg);
    }
    else {
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
