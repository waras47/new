import { header } from "./header.js";
import { body } from "./body.js";

class Grid {
  constructor(init) {
    this.init = init;
  }

  render(element) {
    let table = "<table class='table table-hover'>" + header(this.init.columns) + body(this.init.data) + "</table>";
    element.innerHTML = table;
  }
}
const table = new Grid({
  columns: ["Name", "Email", "Phone Number"],
  data: [
    ["John", "john@example.com", "(353) 01 222 3333"],
    ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
  ],
});
table.render(document.getElementById("app"));
