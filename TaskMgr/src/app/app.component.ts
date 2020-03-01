import { Component } from '@angular/core';
import { Task } from  './task';
import { TaskService } from 'src/app/services/task.service';
import { User } from './user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-mgr';
  selectedTask: Task;

  constructor(private service: TaskService) {

  }

  taskSelected($event) :void {
    
    console.log($event);
  }
}
