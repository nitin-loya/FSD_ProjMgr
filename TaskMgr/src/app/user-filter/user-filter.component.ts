import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.css']
})
export class UserFilterComponent implements OnInit {

  @Output()
  public filterEvent = new EventEmitter();

  public filterFormUser = this.fb.group({
    UserFilter: ['']
  });

  public filterGrid() {
    this.filterEvent.emit(this.filterFormUser.value);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}