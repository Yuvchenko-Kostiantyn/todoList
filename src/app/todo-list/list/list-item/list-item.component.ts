import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() todo
  @Output() removeTodo = new EventEmitter
  constructor() { }

  ngOnInit() {
  }

  removeItem(todo){
    this.removeTodo.emit(todo);
  }

}
