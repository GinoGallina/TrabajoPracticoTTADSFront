import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';
import { filter, first } from 'rxjs';
import { AuthService } from 'src/app/services/auth-services/auth.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css'],
})
export class SideNavbarComponent implements OnInit {
  isAdmin: boolean = false;
  isSeller: boolean = false;
  isUser: boolean = false;
  showOptions: boolean = false;
  currentUrl:string|undefined;

  constructor(private authService: AuthService,private route: ActivatedRoute) {
    this.currentUrl = this.route.snapshot.routeConfig?.path;
  }

  async ngOnInit() {
    
    const token = this.authService.getToken();
    if(token){
      const user = this.authService.getUser(token)
      if (user.type == 'Admin') {
        this.isAdmin = true;
      } else if (user.type == 'Seller') {
        this.isSeller = true;
      } else if (user.type == 'User') {
        this.isUser = true;
      }
    }
  }



  @ViewChild('sidenav') sidenav!: MatSidenav;

  // Function to toggle the sidenav
  toggleSidenav() {
    this.sidenav.toggle();
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  logout() {
    this.authService.logout();
  }
}
