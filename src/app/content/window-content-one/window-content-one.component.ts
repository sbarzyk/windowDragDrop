import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-window-content-one',
  templateUrl: './window-content-one.component.html',
  styleUrls: ['./window-content-one.component.scss']
})
export class WindowContentOneComponent {
   @Input() value: string;

}
