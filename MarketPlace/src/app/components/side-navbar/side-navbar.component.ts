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
    console.log(this.currentUrl)
  }

  async ngOnInit() {
    const user = await this.waitForUsername();
    if (user.type == 'Admin') {
      this.isAdmin = true;
    } else if (user.type == 'Seller') {
      this.isSeller = true;
    } else if (user.type == 'User') {
      this.isUser = true;
    }
  }

  waitForUsername(): Promise<any> {
    return new Promise((resolve) => {
      this.authService.user$
        .pipe(
          // Filtrar valores nulos o undefined
          filter((user) => user !== null && user !== undefined),
          // Tomar el primer valor que cumpla con el filtro
          first()
        )
        .subscribe((user) => {
          resolve(user);
        });
    });
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
