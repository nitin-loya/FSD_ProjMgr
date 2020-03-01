import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../user';

const baseUrl = "http://localhost:50107/api/";
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
    //private messageSource = new BehaviorSubject({
    //    FirstName: '',
    //    LastName: '',
    //    EmpID: 0,
    //    UserId: 0
    //});

    private messageSource = new BehaviorSubject({
        UserID: 0,
        FirstName: '',
        LastName: '',
        EmployeeID: '',
        FullName: ''
    });

    currentTask = this.messageSource.asObservable();
    currentUser = this.messageSource.asObservable();
    constructor(private http: HttpClient) { }

    getUserList(): Observable<User[]> {
        return this.http.get<User[]>(baseUrl + 'users/all');
    }

    getUser(userId: number): Observable<User> {
        return this.http.get<User>(baseUrl + 'users/' + userId);
    }

    saveUser(newUer: User): Observable<any> {
        //console.log(newUer);
        //alert("User Saved");
        let body = JSON.stringify(newUer);
        let httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(baseUrl + 'users/PostUser', body, httpOptions);
        //return true;
    }

    deleteUser(userId: number): Observable<any> {
        let params = new HttpParams()
            .set("userId", '' + userId);
        return this.http.get(baseUrl + 'user/delete', { params: params });
    }

    selectUser(user: User) {
        this.messageSource.next(user);
    }

    resetUser() {
        this.selectUser({
            UserID: 0,
            FirstName: '',
            LastName: '',
            EmployeeID: '',
            FullName: ''
        });
    }
}
