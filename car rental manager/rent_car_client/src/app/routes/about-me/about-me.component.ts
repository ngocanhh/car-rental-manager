import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';
import { ConfirmModalComponent } from 'src/app/modals/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  providers: []
})
export class AboutMeComponent implements OnInit {

  profileForm: FormGroup;
  constructor(private profileService: ProfileService, private modalService: NgbModal) {
    this.profileForm = new FormGroup({
      id: new FormControl(null),
      address: new FormControl(null),
      email: new FormControl(null),
      fullName: new FormControl(null),
      gender: new FormControl(null),
      idCard: new FormControl(null),
      password: new FormControl(null),
      phoneNumber: new FormControl(null),
      roleId: new FormControl(0),
      roleName: new FormControl(null),
    })
  }

  ngOnInit() {
    this.getProfile();
  }

  onSave = () => {
    const req = {
      ...this.profileForm.value
    };
    this.profileService.updateProfile(req).subscribe((res: any) => {
      console.log(res);
      if (res.status == 'Ok') {
        let data = {
          title: 'Notification',
          content: 'Edit Success',
          isDanger: false
        }
        const modalRef = this.modalService.open(ConfirmModalComponent, { centered: true })
        modalRef.componentInstance.data = data;
        modalRef.result.then(value => {
          if (!value) {
            res ? location.reload() : null;
          }
        })
      }
    })
  }

  getProfile() {
    this.profileService.getProfile().subscribe((res: any) => {
      this.profileForm.patchValue({
        ...res.data
      })
    })
  }

}
