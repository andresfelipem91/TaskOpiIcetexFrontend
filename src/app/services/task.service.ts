import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { appsettings } from '../Settings/appsettings';
import { TaskOpi } from '../interface/taskOpi';
import { ITaskOpiModel } from '../models/ITaskOpiModel';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
 private  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
private http=inject(HttpClient);
private apiUrl:string=appsettings.apiUrl + 'TasksOpiIcetex';
  constructor() { }
  getTasklist():Observable<ITaskOpiModel[]>{
    return this.http.get<ITaskOpiModel[]>(this.apiUrl);
  }
  postTask(taskOpi: TaskOpi):Observable<ITaskOpiModel>{
    return this.http.post<ITaskOpiModel>(this.apiUrl,taskOpi,this.httpOptions)
  }
  updateTask(id:string, taskOpi:TaskOpi):Observable<ITaskOpiModel>{
 return this.http.put<ITaskOpiModel>(this.apiUrl,taskOpi);
  }
}
