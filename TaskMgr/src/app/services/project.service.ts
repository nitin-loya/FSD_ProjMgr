import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Project } from '../project';

//const baseUrl = "http://localhost/TaskMgr/api/";
const baseUrl = "http://localhost:50107/api/";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class ProjectService {

  private messageSource = new BehaviorSubject({
    ProjectName: '',
    ProjectID: 0,
    StartDate: '',
    EndDate: '',
    Priority: 1,
    Status: 'I',
    ManagerID: 0,
    ManagerName: '',
    NoOfTasks: 0,
    NoOfTasksComplete: 0
  });

  currentProject = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }

  getProjectList(): Observable<Project[]> {
    return this.http.get<Project[]>(baseUrl + 'project/all');
  }

  getProject(projectId: number): Observable<Project> {
    return this.http.get<Project>(baseUrl + 'project/' + projectId);
  }

  saveProject(newProject: Project): Observable<any> {
    newProject.Status = 'I';
    let body = JSON.stringify(newProject);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(baseUrl + 'project/add', body, httpOptions);
  }

  endProject(projectId: number): Observable<any> {
    let params = new HttpParams().set("projectId", '' + projectId);
    return this.http.get(baseUrl + 'project/end', { params: params });
  }

  selectProject(project: Project) {
    this.messageSource.next(project);
  }

  resetProject() {
    this.selectProject({
      ProjectID: 0,
      ProjectName: '',
      StartDate: '',
      EndDate: '',
      Priority: 1,
      Status: 'I',
      ManagerID: 0,
      ManagerName: '',
      NoOfTasks: 0,
      NoOfTasksComplete: 0
    });
  }

}