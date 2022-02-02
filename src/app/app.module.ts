import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

// All components must be referenced in the App Module! Tip: by using the 'ng g component <name>' command the Angular CLI automatically does that for you.

@NgModule({
  declarations: [
    AppComponent, 
    TodoListComponent, 
    TodoItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
