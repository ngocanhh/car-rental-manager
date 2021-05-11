import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  regisForm: FormGroup;
  constructor(private authService: AuthService, private router: Router, private ngbModal: NgbActiveModal) {
    this.regisForm = new FormGroup({
      address: new FormControl(null),
      email: new FormControl(null),
      fullName: new FormControl(null),
      gender: new FormControl(null),
      idCard: new FormControl(null),
      password: new FormControl(null),
      phoneNumber: new FormControl(null),
      roleId: new FormControl(null),
    })
  }

  ngOnInit() {
  }

  onRegister = () => {
    const req = {
      ...this.regisForm.value
    }
    console.log(req);
    this.authService.regis(req).subscribe((res: any) => {
      res ? this.router.navigate(['/login']) : null;
      window.alert('Registration successfully')
      this.ngbModal.close();
    })
  }

}
