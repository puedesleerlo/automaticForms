import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from "@angular/platform-browser";
import {SharedModule} from "../../shared/shared.module"
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have three elements', () => {
    component.visualization = "list"
    var items = [{
      principal: "hola"
    },
    {
      principal: "que más"
    },
    {
      principal: "pues"
    }]
    component.items = items;
    fixture.detectChanges();
    
    var mdList = fixture.debugElement.queryAll(By.css('md-list-item')).length
    expect(mdList).toBe(3);
  });
});
