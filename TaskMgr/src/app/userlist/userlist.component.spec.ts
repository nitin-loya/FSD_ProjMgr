import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistComponent } from './userlist.component';
import { UserFilterComponent } from '../user-filter/user-filter.component';
import { SearchPipe } from '../search.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProjectService } from '../services/project.service';
import { UserService } from '../services/user.service';

describe('UserlistComponent', () => {
  let component: UserlistComponent;
  let fixture: ComponentFixture<UserlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserlistComponent,
        UserFilterComponent,
        SearchPipe
      ],
      providers: [UserService, ProjectService, UserService],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});