import school = require("./ISchool");
import cnameA = require("./CNameA");
import cnameB = require("./CNameB");
function writeAllName(wirte: school.ISchool) {
  wirte.writename();
}

writeAllName(new cnameA.CNameA());
writeAllName(new cnameB.CNameB());
