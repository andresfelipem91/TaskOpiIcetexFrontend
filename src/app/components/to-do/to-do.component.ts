import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MessageComponent } from '../../Shared/message/message/message.component';
import { ITaskOpiModel } from '../../models/ITaskOpiModel';
import { PriorityPipe } from "../../pipe/priority/priority.pipe";
import { StateTaskPipe } from "../../pipe/statetask/stateTask.pipe";
import { TaskService } from '../../services/task.service';
@Component({
    selector: 'app-to-do',
    standalone: true,
    templateUrl: './to-do.component.html',
    styleUrl: './to-do.component.css',
    imports: [CommonModule, RouterLink, PriorityPipe,StateTaskPipe,MessageComponent]
})
export class ToDoComponent {
  tasks: ITaskOpiModel[] = [];
  showMessage: boolean = false;
  message: string = '';
 
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
    task.isState = task.isState === 0 ? 1: 0;
    this._tasksService.updateTask(task).subscribe(()=>{
        this.message = 'Estado Task Actualizado';
        this.showMessage = true;
        setTimeout(() => {
          this.showMessage = false;
        }, 3000); 
    })
    
  }


}
