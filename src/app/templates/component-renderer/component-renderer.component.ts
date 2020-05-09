import {AfterViewInit, Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {DefaultUpdateComponent} from '../default-update/default-update.component';

@Component({
  selector: 'app-component-renderer',
  templateUrl: './component-renderer.component.html',
  styleUrls: ['./component-renderer.component.css']
})
export class ComponentRendererComponent implements OnInit, AfterViewInit {

  @ViewChild('content', {read: ViewContainerRef}) container: ViewContainerRef;
  @Input() componentType;
  @Input() data;
  private instance;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let factory = this.componentFactoryResolver.resolveComponentFactory(this.componentType);
    let comp: any = this.container.createComponent(factory);
    this.instance = comp.instance;
    this.instance.data = this.data;
  }


  getData(){
    return this.instance.getData();
  }

}
