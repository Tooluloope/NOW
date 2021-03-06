import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('collapse', [
      state('open', style({
        opacity: '1',
        display: 'block',
        transform: 'translate3d(0, 0, 0)'
      })),
      state('closed',   style({
        opacity: '0',
        display: 'none',
        transform: 'translate3d(0, -100%, 0)'
      })),
      transition('closed => open', animate('500ms ease-in')),
      transition('open => closed', animate('100ms ease-out'))
    ])
  ]
})
export class NavbarComponent  {

  collapse:string = "closed";
toggleCollapse() {
// this.show = !this.show
  this.collapse = this.collapse == "open" ? 'closed' : 'open';
}

myMethod() {
  this.collapse = 'closed';
}

}
