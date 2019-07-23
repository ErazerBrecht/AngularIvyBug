import { Component, AfterViewInit, ComponentFactoryResolver, ViewChild, ViewContainerRef, Type } from '@angular/core';
import { HelloComponent } from './components/hello/hello.component';
import { WorldComponent } from './components/world/world.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef, static: false }) container: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  public ngAfterViewInit() {
    this.createComponent(HelloComponent);
    this.createComponent(WorldComponent);
  }

  private createComponent<T>(component: Type<T>) {
    const factory = this.resolver.resolveComponentFactory(component);
    this.container.createComponent(factory);
  }
}
