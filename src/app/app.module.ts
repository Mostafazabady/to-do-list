import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoInputComponent } from "./components/todo-input/todo-input.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TodoInputComponent,
    TodoListComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
