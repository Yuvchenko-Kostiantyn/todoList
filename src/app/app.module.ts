import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonClickComponent } from './button-click/button-click.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoInputComponent } from './todo-list/todo-input/todo-input.component';
import { ListComponent } from './todo-list/list/list.component';
import { ListItemComponent } from './todo-list/list/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonClickComponent,
    NotFoundComponent,
    TodoListComponent,
    TodoInputComponent,
    ListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
