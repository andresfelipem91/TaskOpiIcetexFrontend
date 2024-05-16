import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TaskOpi } from '../../interface/taskOpi';
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
  editTask(id:string,task:any):void{
    const formTask:TaskOpi= {
      ...task,
      isState:parseInt(task.state)
      
    }
    console.log(JSON.stringify(formTask, null, 2))
    this._tasksService.updateTask(id,formTask).subscribe(data=>{
      alert('Task updated state');    });
   }
   
 
}
