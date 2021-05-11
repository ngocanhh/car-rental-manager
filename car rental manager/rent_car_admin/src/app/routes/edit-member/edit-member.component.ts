import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmModalComponent } from 'app/modals/confirm-modal/confirm-modal.component';
import { LevelService } from 'app/services/level.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {

  memberForm: FormGroup;
  id: any;
  public role = [
    {
      name: 'Own',
      id: 2
    },
    {
      name: 'Customer',
      id: 3
    },
  ];

  public gender = [
    {
      name: 'Male',
      value: 'nam'
    },
    {
      name: 'Female',
      value: 'nu'
    },
  ];

  constructor(
    private levelService: LevelService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.memberForm = new FormGroup({
      id: new FormControl({ value: null }),
      address: new FormControl(null),
      email: new FormControl(null),
      fullName: new FormControl(null),
      gender: new FormControl(null),
      idCard: new FormControl(null),
      phoneNumber: new FormControl(null),
      roleId: new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getCustomerInfo(this.id);
      console.log(this.id);
    });
  }

  getCustomerInfo(id: any) {
    this.levelService.getCustomerById(id).subscribe((res: any) => {
      this.memberForm.patchValue({
        ...res.data
      })
    })
  }

  onSave(): void {
    const req = {
      ...this.memberForm.value
    }
    console.log(req);
    this.levelService.updateCustomer(this.id, req).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/membership'])
    });
  }

  confirm() {
    const dialogRef = this.dialog.open(ConfirmModalComponent);
    dialogRef.componentInstance.title = 'Update confirm';
    dialogRef.componentInstance.content = 'Do you want to update this user?';
    dialogRef.componentInstance.action = 'Yes';
    dialogRef.afterClosed().subscribe(result => {
      result ? this.onSave() : null;
    });
  }
}
