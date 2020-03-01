import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserFilterComponent } from './user-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectService } from '../services/project.service';
import { UserService } from '../services/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('UserFilterComponent', () => {
  let component: UserFilterComponent;
  let fixture: ComponentFixture<UserFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFilterComponent ],
      imports:[ReactiveFormsModule,HttpClientTestingModule, HttpClientModule],
      providers: [UserService, ProjectService, UserService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
