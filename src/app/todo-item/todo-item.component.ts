import { Component, OnInit } from '@angular/core';

// in angular every component needs the @Component() Attribute in front of it
// it defines the selector, by which the component can be called inside html of other components
// it also splits up the template (html) and style (css/sass/less) and javascript
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  private test: string = "this is a string inside the TodoItemComponent";
  public variable = "some value"; // we can also remove the data type from the declaration here since we initialize a value which makes the variable of type string in this case
  otherVariable = 2; // whenever we want to make something public we can simply remove the public keyword

  // nonInitializedVariable1: string; // --> this gives an error, because it is a type violation! beacuse JS automaticially initializes the variable with 'undefined' which is not of type string
  nonInitializedVariable1: string | undefined; // but we can extend our type with undefined
  nonInitializedVariable2!: string; // using a ! basically does exactly that in a shorter writing

  constructor() { 
    this.doSomething(); // this happens before ngOnInit()
  }

  ngOnInit(): void {
    console.log("ngOnInit() is a Lifecycle hook which is called when a components data/properties are initialized.");
    console.log(`Content of this.test="${this.test}"`);
  }

  private doSomething(): void {
    console.log("doSomething was called!");
  }
}
