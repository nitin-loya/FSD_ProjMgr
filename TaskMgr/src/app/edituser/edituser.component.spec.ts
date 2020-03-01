import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { EdituserComponent } from './edituser.component';
import { UserlistComponent } from '../userlist/userlist.component';

describe('EdituserComponent', () => {
  let component: EdituserComponent;
  let fixture: ComponentFixture<EdituserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EdituserComponent],
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientModule,
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
      providers: [UserService, UserlistComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdituserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
