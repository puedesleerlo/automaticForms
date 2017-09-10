import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolListComponent } from './tool-list.component';
import {ToolService} from "./../tool.service"
describe('ToolListComponent', () => {
  let component: ToolListComponent;
  let fixture: ComponentFixture<ToolListComponent>;
  let toolServiceStub = {
    tools: require("./../fake.json"),
    user: { name: 'Test User'}
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolListComponent],
      providers: [{provide: ToolService, useValue: this.toolServiceStub } ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("Method testing", () => {
    it('should show you a tool list', () => {
      component.ngOnInit();
      expect(component.hola).toBe("Hola")
    })
  })

});
