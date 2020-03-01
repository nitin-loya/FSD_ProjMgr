import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EdittaskComponent } from './edittask/edittask.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskFilterComponent } from './task-filter/task-filter.component';
import { SearchPipe } from './search.pipe';
import { TaskService } from 'src/app/services/task.service';
import { ProjectComponent } from './project/project.component';
import { UserComponent } from './user/user.component';
import { UserService } from 'src/app/services/user.service';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { EditprojectComponent } from './editproject/editproject.component';
import { ProjectFilterComponent } from './project-filter/project-filter.component';
import { ProjectService } from './services/project.service';
import { UserlistComponent } from './userlist/userlist.component';
import { EdituserComponent } from './edituser/edituser.component';
import { UserFilterComponent } from './user-filter/user-filter.component';
@NgModule({
  declarations: [
    AppComponent,
    EdittaskComponent,
    TasklistComponent,
    TaskFilterComponent,
    SearchPipe,
    ProjectComponent,
      UserComponent,
      UserlistComponent,
      ProjectlistComponent,
      ProjectFilterComponent,
      EditprojectComponent,
      //ProjectService,
      EdituserComponent,
      UserFilterComponent
  ],
  imports: [
   // BrowserModule,
   // AppRoutingModule,
   // HttpClientModule,
   //// HttpClientTestingModule,
   // ReactiveFormsModule,
   // FormsModule
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule
  ],
  providers: [ProjectService, TaskService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
