import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from 'src/app/todos/components/todos/todos.component';
import { TodoComponent } from 'src/app/todos/components/todo/todo.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { TodosService } from './services/todos.service';

const routes: Routes = [{ path: '', component: TodosComponent }];

@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [TodosService],
})
export class TodosModule {}
