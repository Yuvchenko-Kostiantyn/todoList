import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TodoStoreService } from '../todo-store.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  
  constructor(private store: TodoStoreService) { }

  public todoList;

  ngOnInit() {
    this.store.fetchData(10)
    .then(todoList => this.todoList = todoList);
  }

  removeTodo(todo) {
    this.todoList = this.todoList.filter((v) => v !== todo)
  }
  
  getTodo(newTodo){
    this.todoList.push(newTodo)
  }
}
