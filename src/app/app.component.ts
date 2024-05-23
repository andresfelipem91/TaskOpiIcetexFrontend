import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageComponent } from './Shared/message/message/message.component';
import { PriorityPipe } from './pipe/priority/priority.pipe';
import { StateTaskPipe } from './pipe/statetask/stateTask.pipe';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,PriorityPipe,StateTaskPipe,MessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TaskOpiIcetexFrontend';
}
