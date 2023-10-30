import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  username: string | undefined;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.username = this.authService.getUser().username;
  }
}
