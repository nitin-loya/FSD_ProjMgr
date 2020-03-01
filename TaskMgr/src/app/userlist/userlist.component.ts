import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  userSource: any;
  userList: any;
  filter: any;
  userCriteria: any;
  message: string;
  @Output() userSelected = new EventEmitter<User>();

  constructor(private router: Router, private service: UserService) {
  }

  loadUserList() {
    this.service.getUserList()
      .subscribe(response => {
        this.userList = response;
        this.userSource = response;
      });
  }

  ngOnInit() {
    this.loadUserList();
  }

  onEdit(user: User): void {
    this.service.selectUser(user);
  }

  onDelete(user: User): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.service.deleteUser(user.UserID)
        .subscribe((data) => {
          this.loadUserList();
        })
    }
  }
}
