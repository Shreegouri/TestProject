import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `<h1>TwoWayBindingExample</h1>
  <input type="text" [(ngModel)]="myModel"/>
  <h2>Hello {{myModel}}</h2>`
})
export class AppComponent {
}
