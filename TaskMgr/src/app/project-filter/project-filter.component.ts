import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-project-filter',
  templateUrl: './project-filter.component.html',
  styleUrls: ['./project-filter.component.css']
})
export class ProjectFilterComponent implements OnInit {

  @Output()
  public filterEvent = new EventEmitter();

  public filterFormProject = this.fb.group({
    ProjectName: ['']
  });

  public filterGrid() {
    this.filterEvent.emit(this.filterFormProject.value);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}