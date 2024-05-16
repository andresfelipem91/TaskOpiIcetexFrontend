import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ITaskOpiModel } from '../../models/ITaskOpiModel';
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  tasks: ITaskOpiModel[] = [];
 constructor(private _tasksService: TaskService){}
 ngOnInit(): void{
  this.getTask();
}
  getTask(){
    this._tasksService.getTasklist().subscribe(data=>{
      this.tasks=data;
    })
  }
 
}
