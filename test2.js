"use strict";
//var [変数名] : [type] = 値;
var uname = "Runoob";
var score1 = 50;
var score2 = 42.5;
var sum = score1 + score2;
console.log("uname", uname);
console.log("score1", score1);
console.log("score2", score2);
console.log("sum", sum);
var str = "1";
var str2 = str;
//console.log("str2", str2);
console.log("typeof str2", typeof str2);
var global_num = 12;
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13;
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14;
        console.log(local_num);
    };
    Numbers.sval = 10;
    return Numbers;
}());
console.log("Global Value:" + global_num);
console.log(Numbers.sval);
var objN = new Numbers();
console.log("Class Value:" + objN.num_val);
console.log(objN.storeNum());
var num = -2;
var result = num > 0 ? "0より大きい" : "0より小さい、又は0等同";
console.log(result);
var grade = "A";
switch (grade) {
    case "A":
        console.log("Good");
        break;
    case "B":
        console.log("Bad");
        break;
    default:
        console.log("default...");
        break;
}
