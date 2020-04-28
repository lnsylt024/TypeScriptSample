"use strict";
exports.__esModule = true;
var cnameA = require("./CNameA");
var cnameB = require("./CNameB");
function writeAllName(wirte) {
    wirte.writename();
}
writeAllName(new cnameA.CNameA());
writeAllName(new cnameB.CNameB());
