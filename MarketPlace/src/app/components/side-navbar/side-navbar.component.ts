import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent {
     @ViewChild('sidenav') sidenav!: MatSidenav;

  // Function to toggle the sidenav
  toggleSidenav() {
    this.sidenav.toggle();
  }
}
