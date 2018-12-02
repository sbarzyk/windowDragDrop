import { Component, ViewChild, ViewContainerRef, OnInit, HostListener } from '@angular/core';
import { WindowService, WindowComponent, WindowRef } from '@progress/kendo-angular-dialog';
import { WindowContentOneComponent } from './window-content-one/window-content-one.component';
import { FormGroup, FormControl } from '@angular/forms';

interface WindowConfig {
  title: string;
  componentType: string;
  componentData: Object;
  width: number;
  height: number;
  top ?: number;
  left ?: number;
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef })
  containerRef: ViewContainerRef;

  private componentTypes = {
    WindowContentOneComponent: WindowContentOneComponent
  };

  private static getTypeFromObject(o: Object): string {
    return (o as any).__proto__.constructor.name;
  }

  @HostListener('document:mousemove', ['$event']) onMouseMove(e) {
    // console.log(e);
  }

  constructor( private windowService: WindowService ) {}

  private createWindow(windowConfig: WindowConfig) {
    const windowRef: WindowRef = this.windowService.open({
      appendTo: this.containerRef,
      title: windowConfig.title,
      content: this.componentTypes[windowConfig.componentType],
      width: windowConfig.width,
      height: windowConfig.height,
      top: windowConfig.top,
      left: windowConfig.left
    });

    const componentInstance: Object = windowRef.content.instance;
    Object.keys(windowConfig.componentData).forEach((key: string) => {
      componentInstance[key] = windowConfig.componentData[key];
    });

    const windowComponent: WindowComponent = windowRef.window.instance;

    windowComponent.dragStart.subscribe(() => {
      localStorage.setItem('windowConfig', JSON.stringify({
          title: windowComponent.title,
          componentType: ContentComponent.getTypeFromObject(componentInstance),
          componentData: componentInstance,
          width: windowComponent.width,
          height: windowComponent.height
      }));
    });
    windowComponent.dragEnd.subscribe(() => {
      localStorage.removeItem('windowConfig');
    });
  }

  newWindow() {
    this.createWindow({
      title: 'Beispiel-Titel',
      componentType: 'WindowContentOneComponent',
      componentData: {},
      width: 250,
      height: 200,
      top: 250,
      left: 200
    });
  }

  onMouseOver(event: MouseEvent) {
    const windowConfig: WindowConfig = JSON.parse(localStorage.getItem('windowConfig'));

    if (windowConfig != null) {
      this.createWindow({
        ...windowConfig,
        top: event.pageY,
        left: event.pageX
      });
    }
  }

  ngOnInit() {
  }
}
