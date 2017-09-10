import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicsModule} from "../../basics/basics.module"
import { ToolDetailComponent } from './tool-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import {ToolsFormResolveService} from "./../tool-form.resolve"
describe('ToolDetailComponent', () => {
  let component: ToolDetailComponent;
  let fixture: ComponentFixture<ToolDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BasicsModule, RouterTestingModule.withRoutes(
        [{path: '', component: ToolDetailComponent, resolve: {
          tool: ToolsFormResolveService
        }}])],
      declarations: [ ToolDetailComponent ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    var model = require("./../fake.json")
    component.model = model[0];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
