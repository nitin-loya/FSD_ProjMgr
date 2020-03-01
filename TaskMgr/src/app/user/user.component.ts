import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http/src/backend';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../user';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    user$: Observable<User>;

    @Input() user: User;
    userForm = this.fb.group({
        UserId: ['0'],
        FirstName: [''],
        LastName: [''],
        EmpID: ['0']        
    });

    constructor(private router: Router, private route: ActivatedRoute, private userService: UserService, private fb: FormBuilder) { }

    submitUser() {
        this.userService.saveUser(this.user).subscribe(data => this.router.navigate(['/user']));
        console.log(this.user);
    }

    reset() {
        this.userForm.reset();
    }

    ngOnInit() {
        this.userService.currentTask.subscribe((user) => {
            this.user = user;
            //this.taskService.getParentTasks(this.task.TaskId).subscribe(parentList => this.parentList = parentList);            
            console.log(this.user);
        }); 
  }

}
