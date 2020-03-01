import { TestBed, getTestBed, inject, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { User } from '../user';
import { HttpClientModule } from '@angular/common/http';

const baseUrl = "http://localhost/TaskMgr/api/";
describe('UserService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, HttpClientModule],
            providers: [UserService]
        });
    });

    const userList: User[] = [
        {
            UserID: 1,
            EmployeeID: 'Emp1',
            FirstName: 'First Name1',
            LastName: 'Last Name1',
            FullName: 'First Name1 Last Name1'
        },
        {
            UserID: 2,
            EmployeeID: 'Emp2',
            FirstName: 'First Name2',
            LastName: 'Last Name2',
            FullName: 'First Name2 Last Name2'
        },
        {
            UserID: 3,
            EmployeeID: 'Emp3',
            FirstName: 'First Name3',
            LastName: 'Last Name3',
            FullName: 'First Name3 Last Name3'
        }
    ];
    it('UserService is created',
        inject([HttpTestingController, UserService], (httpMock: HttpTestingController, service: UserService) => {
            expect(service).toBeTruthy();
        })
    );

    it('getUserList() should return Observable<User[]>',
        inject([HttpTestingController, UserService], (httpMock: HttpTestingController, service: UserService) => {
            const url = baseUrl + 'user/all';
            const expectedResponse = userList;
            let actualResponse = null;

            service.getUserList().subscribe(receivedResponse => {
                actualResponse = receivedResponse;
                expect(actualResponse).toEqual(expectedResponse);
            }, (error: any) => { });

            const requestWrapper = httpMock.expectOne({ url: url });
            requestWrapper.flush(expectedResponse);
            expect(requestWrapper.request.method).toEqual('GET');
        })
    );

    it('getUser() should return Observable<User>',
        inject([HttpTestingController, UserService], (httpMock: HttpTestingController, service: UserService) => {
            const url = baseUrl + 'user/2';
            const expectedResponse = {
                UserID: 2,
                EmployeeID: 'Emp2',
                FirstName: 'First Name2',
                LastName: 'Last Name2',
                FullName: 'First Name2 Last Name2'
            };
            let actualResponse = null;

            service.getUser(2).subscribe(receivedResponse => {
                actualResponse = receivedResponse;
                expect(actualResponse).toEqual(expectedResponse);
            }, (error: any) => { });

            const requestWrapper = httpMock.expectOne({ url: url });
            requestWrapper.flush(expectedResponse);
            expect(requestWrapper.request.method).toEqual('GET');
        })
    );

    it('saveUser() should save user',
        inject([HttpTestingController, UserService], (httpMock: HttpTestingController, service: UserService) => {
            const url = baseUrl + 'user/add';
            const newUser = {
                UserID: 2,
                EmployeeID: 'Emp2',
                FirstName: 'First Name2',
                LastName: 'Last Name2',
                FullName: 'First Name2 Last Name2'
            };
            const expectedResponse = '<form />';
            let actualResponse = null;

            service.saveUser(newUser).subscribe(receivedResponse => {
                actualResponse = receivedResponse;
                expect(actualResponse).toEqual(expectedResponse);
            }, (error: any) => { });

            const requestWrapper = httpMock.expectOne({ url: url, method: 'POST' });
            requestWrapper.flush(expectedResponse);
            expect(requestWrapper.request.method).toEqual('POST');
        })
    );
}
);
