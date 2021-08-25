import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookListComponent} from '../../component/book-list/book-list.component';
import {BookCreateComponent} from '../../component/book-create/book-create.component';
import {BookEditComponent} from '../../component/book-edit/book-edit.component';
import {BookDeleteComponent} from '../../component/book-delete/book-delete.component';

const routes: Routes = [{
  path: 'list',
  component: BookListComponent
},{
  path: 'create',
  component: BookCreateComponent
},{
  path: 'edit/:id',
  component: BookEditComponent
},{
  path: 'delete/:id',
  component: BookDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
