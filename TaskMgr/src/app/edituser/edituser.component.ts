import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../user';
import { UserService } from '../services/user.service';
import { UserlistComponent } from '../userlist/userlist.component';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})

export class EdituserComponent implements OnInit {
  user$: Observable<User>;
  userList: User[];
  submitted = false;
  userForm: FormGroup;

  @Input() user: User;


  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder,
    private userService: UserService, private userListComp: UserlistComponent) {
  }

  get userFields() { return this.userForm.controls; }

  submitUser() {
    this.submitted = true;
    if (this.userForm.invalid) { return; }
    this.userService.saveUser(this.user).subscribe(data => {
      this.userListComp.loadUserList();
      this.resetUser();
    });
  }

  resetUser() {
    this.submitted = false;
    this.userService.resetUser();
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      UserID: ['0'],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      EmployeeID: ['', Validators.required]
    });

    this.userService.currentUser.subscribe((user) => {
      this.user = Object.assign({}, user);
      this.userService.getUserList().subscribe(userList => this.userList = userList);
      console.log('user received');
      console.log(this.user);
    });
  }

  ngOnDestroy() {
    this.resetUser();
    console.log('Edit user view destroyed');
  }
}
