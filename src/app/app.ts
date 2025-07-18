import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router';
import { About } from './component/about/about';
import { Header } from './component/header/header';
import { Footer } from './component/footer/footer'
import { Button } from './component/button/button';
import { Tasks } from './component/tasks/tasks';
import { TaskItem } from './component/task-item/task-item';
import { AddTask } from './component/add-task/add-task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const appRoutes: Routes = [
  { path: '', component: Tasks },
  { path: 'about', component: About },
];

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Button, Tasks, TaskItem, FontAwesomeModule, AddTask, FormsModule, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   faTimes = faTimes;
}
