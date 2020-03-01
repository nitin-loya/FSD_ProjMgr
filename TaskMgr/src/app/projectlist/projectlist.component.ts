import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Project } from '../project';
import { Router } from '@angular/router';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent implements OnInit {

  projectSource: any;
  projectList: any;
  filter: any;
  criteria: any;
  message: string;
  @Output() projectSelected = new EventEmitter<Project>();

  constructor(private router: Router, private service: ProjectService) {
  }

  loadProjectList() {
    this.service.getProjectList()
      .subscribe(response => {
        this.projectList = response;
        this.projectSource = response;
      });
  }

  ngOnInit() {
    this.loadProjectList();
  }

  onEdit(project: Project): void {
    this.service.selectProject(project);
  }

  onEnd(project: Project): void {
    console.log('end');
    this.service.endProject(project.ProjectID).subscribe((data) => {
      this.loadProjectList();
    })
  }
}
