import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from 'src/app/modals/register/register.component';
import { SignInComponent } from "../../modals/sign-in/sign-in.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  login(): void {
    this.modalService.open(SignInComponent, { centered: true, size: "lg" });
  }

  register(): void {
    this.modalService.open(RegisterComponent, {centered: true, size: "lg"});
  }
}
