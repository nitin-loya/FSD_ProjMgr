import { TestBed, getTestBed, inject, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Project } from '../project';
import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from './project.service';
import { UserService } from './user.service';

const baseUrl = "http://localhost/project-mgr/api/";
describe('ProjectService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [ProjectService, ProjectService, UserService]
    });
  });

  const projectList: Project[] = [
    {
      ProjectID: 1,
      ProjectName: 'Project1',
      StartDate: '12-Feb-2020',
      EndDate: '17-Feb-2020',
      Priority: 1,
      Status: 'I',
      ManagerID: 1,
      ManagerName: '',
      NoOfTasks: 1,
      NoOfTasksComplete: 1
    },
    {
      ProjectID: 2,
      ProjectName: 'Project2',
      StartDate: '12-Feb-2020',
      EndDate: '17-Feb-2020',
      Priority: 1,
      Status: 'I',
      ManagerID: 2,
      ManagerName: '',
      NoOfTasks: 1,
      NoOfTasksComplete: 1
    },
    {
      ProjectID: 3,
      ProjectName: 'Project3',
      StartDate: '12-Feb-2020',
      EndDate: '17-Feb-2020',
      Priority: 1,
      Status: 'I',
      ManagerID: 1,
      ManagerName: '',
      NoOfTasks: 1,
      NoOfTasksComplete: 1
    }
  ];
  it('ProjectService is created',
    inject([HttpTestingController, ProjectService], (httpMock: HttpTestingController, service: ProjectService) => {
      expect(service).toBeTruthy();
    })
  );

  it('getProjectList() should return Observable<Project[]>',
    inject([HttpTestingController, ProjectService], (httpMock: HttpTestingController, service: ProjectService) => {
      const url = baseUrl + 'project/all';
      const expectedResponse = projectList;
      let actualResponse = null;

      service.getProjectList().subscribe(receivedResponse => {
        actualResponse = receivedResponse;
        expect(actualResponse).toEqual(expectedResponse);
      }, (error: any) => { });

      const requestWrapper = httpMock.expectOne({ url: url });
      requestWrapper.flush(expectedResponse);
      expect(requestWrapper.request.method).toEqual('GET');
    })
  );


  it('getProject() should return Observable<Project>',
    inject([HttpTestingController, ProjectService], (httpMock: HttpTestingController, service: ProjectService) => {
      const url = baseUrl + 'project/2';
      const expectedResponse = {
        ProjectID: 2,
        ProjectName: 'Project2',
        StartDate: '12-Feb-2020',
        EndDate: '17-Feb-2020',
        Priority: 1,
        Status: 'I',
        ManagerID: 1,
        ManagerName: '',
        NoOfTasks: 1,
        NoOfTasksComplete: 1
      };
      let actualResponse = null;

      service.getProject(2).subscribe(receivedResponse => {
        actualResponse = receivedResponse;
        expect(actualResponse).toEqual(expectedResponse);
      }, (error: any) => { });

      const requestWrapper = httpMock.expectOne({ url: url });
      requestWrapper.flush(expectedResponse);
      expect(requestWrapper.request.method).toEqual('GET');
    })
  );

  it('saveProject() should save project',
    inject([HttpTestingController, ProjectService], (httpMock: HttpTestingController, service: ProjectService) => {
      const url = baseUrl + 'project/add';
      const newProject = {
        ProjectID: 2,
        ProjectName: 'Project2',
        StartDate: '12-Feb-2020',
        EndDate: '17-Feb-2020',
        Priority: 1,
        Status: 'I',
        ManagerID: 1,
        ManagerName: '',
        NoOfTasks: 1,
        NoOfTasksComplete: 1
      };
      const expectedResponse = '<form />';
      let actualResponse = null;

      service.saveProject(newProject).subscribe(receivedResponse => {
        actualResponse = receivedResponse;
        expect(actualResponse).toEqual(expectedResponse);
      }, (error: any) => { });

      const requestWrapper = httpMock.expectOne({ url: url, method: 'POST' });
      requestWrapper.flush(expectedResponse);
      expect(requestWrapper.request.method).toEqual('POST');
    })
  );
});
