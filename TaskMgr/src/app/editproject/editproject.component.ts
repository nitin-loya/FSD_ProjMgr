import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { ProjectService } from '../services/project.service';
import { Project } from '../project';
import { User } from '../user';
import { UserService } from '../services/user.service';
import { ProjectlistComponent } from '../projectlist/projectlist.component';

@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.css']
})

export class EditprojectComponent implements OnInit {
  project$: Observable<Project>;
  parentList: any[];
  projectList: Project[];
  userList: User[];
  submitted = false;
  projectForm: FormGroup;

  @Input() project: Project;

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder,
    private projectService: ProjectService, private userService: UserService,
    private projectListComp: ProjectlistComponent) {
  }

  get projectFields() { return this.projectForm.controls; }

  submitProject() {
    this.submitted = true;
    if (this.projectForm.invalid) { return; }
    this.projectService.saveProject(this.project).subscribe(data => {
      this.projectListComp.loadProjectList();
      this.resetProject();
    });
  }

  resetProject() {
    this.submitted = false;
    this.projectService.resetProject();
  }

  ngOnInit() {
    this.projectForm = this.fb.group({
      ProjectName: ['', Validators.required],
      ProjectID: [0, Validators.required],
      Priority: ['1'],
      StartDate: ['', Validators.required],
      EndDate: ['', Validators.required],
      ManagerID: ['0', Validators.required]
    });

    this.projectService.currentProject.subscribe((project) => {
      this.project = Object.assign({}, project);
      this.userService.getUserList().subscribe(userList => this.userList = userList);
    });
  }

  ngOnDestroy() {
    this.projectService.resetProject();
  }
}
