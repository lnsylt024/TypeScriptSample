import school = require("./ISchool");
export class CNameB implements school.ISchool {
  public writename() {
    console.log("There is Class NameB.");
  }
}
