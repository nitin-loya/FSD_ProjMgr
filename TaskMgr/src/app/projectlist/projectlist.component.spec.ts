import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectlistComponent } from './projectlist.component';
import { ProjectFilterComponent } from '../project-filter/project-filter.component';
import { SearchPipe } from '../search.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProjectService } from '../services/project.service';
import { UserService } from '../services/user.service';

describe('ProjectlistComponent', () => {
  let component: ProjectlistComponent;
  let fixture: ComponentFixture<ProjectlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProjectlistComponent,
        ProjectFilterComponent,
        SearchPipe
      ],
      providers: [ProjectService, UserService],
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
    fixture = TestBed.createComponent(ProjectlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});