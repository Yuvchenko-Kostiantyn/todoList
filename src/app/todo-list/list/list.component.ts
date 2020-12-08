import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoStoreService } from 'src/app/todo-store.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input()  todoList 
  @Output() removeTodo = new EventEmitter

  constructor() { }

  ngOnInit() {
   
  }

  onTodoRemove(todo){
    this.removeTodo.emit(todo);
  }
}
