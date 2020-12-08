import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonClickComponent } from './button-click/button-click.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoListComponent } from './todo-list/todo-list.component';


const routes: Routes = [{
  path: "todo",
  component: TodoListComponent
},
{
  path: "not-todo",
  component: ButtonClickComponent
},
{
  path: "**",
  component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
