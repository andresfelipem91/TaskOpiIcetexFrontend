import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ITaskOpiModel } from '../../models/ITaskOpiModel';
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  tasks: ITaskOpiModel[] = [];
  
 constructor(private _tasksService: TaskService,aRoute:ActivatedRoute){
 
 }

 ngOnInit(): void{
  this.getTask();
}
  getTask(){
    this._tasksService.getTasklist().subscribe(data=>{
      this.tasks=data;
    })
  }
  editTask(task: ITaskOpiModel): void {
    if (task.isState === 0) {
      task.isState = 1;
      const UpdateTask = task;
      this._tasksService.updateTask(UpdateTask).subscribe(()=>{
        alert("Task updated")
      })
    }
    // this._tasksService.updateTask(Update).subscribe( (data) => {
    //     if (task.isState === 0) {
    //       task.isState = 1;
    //       data=task.isState ;
    //     } else {
    //       console.error('Respuesta del servidor no válida', task);
    //     }
      
      
    // });
  }
  // editTask(task: ITaskOpiModel): void {
  //   const taskId = task.id; 
  //   this._tasksService.updateTask(task).subscribe({
  //     next: (data) => {
  //       // Verificar si el estado ha cambiado
  //       if (data.isState !== task) {
  //         // Actualizar el estado de la tarea
  //         task.isState = data.isState;
  //       }
  //       console.log('Nuevo estado de la tarea:', task.isState);
  //     },
  //     error: (err) => {
  //       console.error('Error al actualizar la tarea:', err);
  //     }
  //   });
  // }
  // editTask(task:any):void{

  //   this._tasksService.updateTask(task).subscribe(data=>{
  //     console.log(!data.isState)
  //     if(data.isState === task.isState)
  //       {
        
  //         console.log(!data.isState)
  //         return !data.isState
  //       }
  //       console.log(data.isState)
  //       return data.isState
  //      });
       
    

  //  }

}
