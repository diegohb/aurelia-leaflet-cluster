import * as $ from "jquery";

export class App { 
  message = 'Hello World!';  

  constructor() {

  }

  public attached() {
    $("h2").text("jquery loaded!")
  }
}
