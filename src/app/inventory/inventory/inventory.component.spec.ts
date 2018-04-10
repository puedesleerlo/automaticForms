import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BasicsModule} from "./../../basics/basics.module";
import { SharedModule } from "../../shared/shared.module";
import {ToolService} from "../tool.service"
import { InventoryComponent } from './inventory.component';

describe('InventoryComponent', () => {
  let component: InventoryComponent;
  let fixture: ComponentFixture<InventoryComponent>;
  let toolService: ToolService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, BasicsModule, SharedModule],
      declarations: [ InventoryComponent ],
      providers: [ToolService]
    })
    .compileComponents();
    toolService = TestBed.get(ToolService)
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it ('should have items information from service', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.items).toEqual(toolService.getTools());
  });
});
