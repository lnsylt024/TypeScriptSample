import school = require("./ISchool");
export class CNameA implements school.ISchool {
  public writename() {
    console.log("there is Class NameA.");
  }
}
