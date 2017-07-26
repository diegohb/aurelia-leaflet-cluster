import * as $ from "jquery";
import "bootstrap-material-design";

export class App { 
  message = 'Hello World!';  

  constructor() {

  }

  public attached() {
    $.material.init()
    $("h2").text("jquery loaded!")
  }
}
