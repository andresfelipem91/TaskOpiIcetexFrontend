import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskOpi } from '../../interface/taskOpi';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-agregar-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './agregar-task.component.html',
  styleUrl: './agregar-task.component.css'
})
export class AgregarTaskComponent {
form: FormGroup;
constructor(private fb: FormBuilder,private _taskService:TaskService)
{
  this.form= this.fb.group({
    title:['', Validators.required],
    priority:['', Validators.required],
    expirationDate:['', Validators.required],
    detalle:['', Validators.required]
  })
}
addTask(task:any):void{
  const formTask:TaskOpi= {
    ...task, 
    priority: parseInt(task.priority) ,
    isState:0,
    expirationDate:new Date(task.expirationDate).toISOString()
  }
  console.log(JSON.stringify(formTask, null, 2))
  this._taskService.postTask(formTask).subscribe(data=>{
   
    alert("guaradado exitosa mente" )
    
  })
 }
}
