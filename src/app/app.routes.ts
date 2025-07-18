import { Routes } from '@angular/router';
import { Tasks } from './component/tasks/tasks';
import { About } from './component/about/about';

export const routes: Routes = [
  { path: '', component: Tasks },
  { path: 'about', component: About },
];