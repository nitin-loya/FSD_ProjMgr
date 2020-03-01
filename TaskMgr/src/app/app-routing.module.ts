import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasklistComponent } from './tasklist/tasklist.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { ProjectComponent } from './project/project.component';
import { UserComponent } from './user/user.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
    { path: 'taskview', component: TasklistComponent },
    { path: 'edittask', component: EdittaskComponent },
    { path: 'projectview', component: ProjectlistComponent },
    { path: 'userview', component: UserlistComponent }
];

//const routes: Routes = [
//    { path: 'project', component: ProjectComponent },
//    { path: 'edittask', component: EdittaskComponent },
//    { path: 'user', component: UserComponent },
//    { path: 'taskview', component: TasklistComponent }    
//];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
