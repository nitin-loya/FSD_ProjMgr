import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectFilterComponent } from './project-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectService } from '../services/project.service';
import { UserService } from '../services/user.service';

describe('ProjectFilterComponent', () => {
  let component: ProjectFilterComponent;
  let fixture: ComponentFixture<ProjectFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectFilterComponent ],
      imports:[ReactiveFormsModule],
      providers: [ProjectService, UserService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
