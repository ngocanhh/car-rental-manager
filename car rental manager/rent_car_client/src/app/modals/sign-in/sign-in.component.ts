import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup

  constructor(private authService: AuthService, private router: Router, private ngbModal: NgbActiveModal) {
    this.loginForm = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null),
    })
  }


  ngOnInit() {
  }

  onLogin() {
    const req = {
      ...this.loginForm.value
    };
    this.authService.login(req).subscribe((res: any) => {
      if (res) {
        localStorage.setItem('TOKEN', res.data.access_token);
        localStorage.setItem('USERNAME', res.data.username);
        localStorage.setItem('ROLE', res.data.roleName);
        this.router.navigate(['/']);
        window.alert('Login successfully')
        this.ngbModal.close();
        setTimeout(() => {
          location.reload();
        }, 1000);
      }
    })
  }

}
