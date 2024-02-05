import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user!: any;
  carouselItems = [
    { image: 'path/to/image1.jpg', alt: 'Slide 1' },
    { image: 'path/to/image2.jpg', alt: 'Slide 2' },
    // Agrega más elementos según sea necesario
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const token = this.authService.getToken()
    if(!token){
      alert('Error al traer ele token')
    }else{
      this.user = this.authService.getUser(token);
      console.log(this.user)
    }
  }
}
