import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {

  constructor() { }
  newTodoItem = '';
  @Output() addTodo= new EventEmitter()

  ngOnInit() {
  }

  addNewTodo(title){
    if (!title) return;

    const newTodo = {
      title,
      completed: false
    }
    this.newTodoItem = "";

    this.addTodo.emit(newTodo);
  }

}
