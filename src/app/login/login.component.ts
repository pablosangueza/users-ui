import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  login() {
    // Here you can add your login logic
    if (this.username === 'admin' && this.password === 'password') {
      //alert('Login successful');
      this.router.navigate(['/home']);
    } else {
      alert('Invalid username or password');
    }
  }
}
