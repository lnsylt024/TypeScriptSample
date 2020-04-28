"use strict";
function employee(id, name) {
    this.id = id;
    this.name = name;
}
var emp = new employee(123, "admin");
employee.prototype.email = "admin@runoob.com"; // add email prototype
console.log(emp.id);
console.log(emp.name);
console.log(emp.email);
var j;
var nums = [1001, 1002, 1003, 1004];
for (j in nums) {
    console.log(j, nums[j]);
}
