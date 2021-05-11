import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmModalComponent } from 'app/modals/confirm-modal/confirm-modal.component';
import { BrandService } from 'app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
  providers: [MatDialog]

})
export class BrandComponent implements OnInit {

  brands;

  constructor(private router: Router, private brandService: BrandService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBrands();
  }

  editBrand = (id) => {
    this.router.navigate([`/edit-brand/${id}`]);
  }

  deleteBrand(id: any) {
    this.brandService.deleteBrandById(id).subscribe(res => {
      console.log(res);
      this.getBrands();
    })
  }

  getBrands() {
    this.brandService.getBrands().subscribe((res: any) => {
      console.log(res);
      this.brands = res.data;
      console.log(this.brands);

    })
  }

  confirmDelete(id) {
    const dialogRef = this.dialog.open(ConfirmModalComponent);
    dialogRef.componentInstance.title = 'Delete confirm';
    dialogRef.componentInstance.content = 'Do you want to delete permanently this car?';
    dialogRef.componentInstance.action = 'Yes';
    dialogRef.afterClosed().subscribe(result => {
      result ? this.deleteBrand(id) : null;
    });
  }
}
