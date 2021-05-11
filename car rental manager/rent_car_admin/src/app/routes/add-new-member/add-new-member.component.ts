import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LevelService } from 'app/services/level.service';

@Component({
  selector: 'app-add-new-member',
  templateUrl: './add-new-member.component.html',
  styleUrls: ['./add-new-member.component.css']
})
export class AddNewMemberComponent implements OnInit {

  newMemberForm: FormGroup;
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

  constructor(private levelService: LevelService, private router: Router) {
    this.newMemberForm = new FormGroup({
      address: new FormControl(null),
      email: new FormControl(null),
      fullName: new FormControl(null),
      gender: new FormControl(null),
      idCard: new FormControl(null),
      phoneNumber: new FormControl(null),
      roleId: new FormControl(null),
      password: new FormControl(null),
    });
  }

  ngOnInit(): void {
  }

  onSave(): void {
    const req = {
      ...this.newMemberForm.value
    }
    console.log(req);
    this.levelService.createCustomer(req).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/membership'])
    });
  }

}
