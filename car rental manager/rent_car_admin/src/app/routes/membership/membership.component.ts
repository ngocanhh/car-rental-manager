import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmModalComponent } from 'app/modals/confirm-modal/confirm-modal.component';
import { Level } from 'app/models/level.model';
import { LevelService } from 'app/services/level.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css'],
  providers: [MatDialog]
})
export class MembershipComponent implements OnInit {

  customers;

  constructor(private router: Router, private levelService: LevelService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  editCustomer = (id) => {
    this.router.navigate([`/edit-member/${id}`]);
  }

  deleteCustomer(id: any) {
    this.levelService.deleteCustomerById(id).subscribe(res => {
      console.log(res);
      this.getCustomers();
    })
  }

  getCustomers() {
    this.levelService.getCustomer().subscribe((res: any) => {
      this.customers = res.data;
    })
  }

  confirmDelete(id) {
    const dialogRef = this.dialog.open(ConfirmModalComponent);
    dialogRef.componentInstance.title = "Delete confirm";
    dialogRef.componentInstance.content = "Do you want to delete permanently this user?";
    dialogRef.componentInstance.action = "Yes";
    dialogRef.afterClosed().subscribe(result => {
      result ? this.deleteCustomer(id) : null;
    });
  }

}
