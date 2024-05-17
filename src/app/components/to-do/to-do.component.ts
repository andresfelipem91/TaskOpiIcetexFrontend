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
  }

}
