import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ProjectService } from '../services/project.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { EditprojectComponent } from './editproject.component';
import { UserService } from '../services/user.service';
import { ProjectlistComponent } from '../projectlist/projectlist.component';

describe('EditprojectComponent', () => {
  let component: EditprojectComponent;
  let fixture: ComponentFixture<EditprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditprojectComponent],
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientModule,
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
      providers: [ProjectService, UserService, ProjectlistComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
