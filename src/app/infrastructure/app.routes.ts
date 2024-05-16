import { Routes } from '@angular/router';
import { AgregarTaskComponent } from '../components/agregar-task/agregar-task.component';
import { ToDoComponent } from '../components/to-do/to-do.component';
export const routes: Routes = [
  {
    path:'',
    component: ToDoComponent
  },
  {
    path:'AddTasks',
    component: AgregarTaskComponent
  }
];
