import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicsModule} from "../../basics/basics.module"
import { ToolFormComponent } from './tool-form.component';

describe('ToolFormComponent', () => {
  let component: ToolFormComponent;
  let fixture: ComponentFixture<ToolFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BasicsModule],
      declarations: [ ToolFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
