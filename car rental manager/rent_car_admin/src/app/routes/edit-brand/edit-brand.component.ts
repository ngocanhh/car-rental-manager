import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmModalComponent } from 'app/modals/confirm-modal/confirm-modal.component';
import { BrandService } from 'app/services/brand.service';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.css']
})
export class EditBrandComponent implements OnInit {

  brandForm: FormGroup;
  id: any;
  logo;

  constructor(
    private brandService: BrandService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.brandForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null),
      file: new FormControl(null),
      nation: new FormControl(null)
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getInfo();
    });
  }

  getInfo() {
    this.brandService.getBrandById(this.id).subscribe((res: any) => {
      this.brandForm.patchValue({
        ...res.data
      })
      this.logo = res.data.logo;
    })
  }

  onSave(): void {
    const formData: FormData = new FormData();
    formData.append('file', this.brandForm.controls.file.value);
    let data = {
      nation: this.brandForm.controls.nation.value,
      name: this.brandForm.controls.name.value
    }
    this.brandService.updateBrand(this.brandForm.controls.id.value ,data).subscribe((res: any) => {
      if (res.status == 'Ok') {
        if (this.brandForm.controls.file.value) {
          this.brandService.uploadImage(res.data.id, formData).subscribe((res: any) => {
            if (res.status == 'Ok') {
              this.router.navigate(['/brand'])
            }
          })
        } else {
          this.router.navigate(['/brand'])
        }
      }
    });
  }

  handleFileInput(files: FileList) {
    if (files.length > 0 && this.validationInput(files[0])) {
      this.brandForm.controls.file.setValue(files[0]);
      const reader = new FileReader();

      reader.readAsDataURL(files[0]);
      reader.onload = (event) => {
        this.logo = event.target.result;
      };
    }
  }

  validationInput(file: File) {
    return (
      file.type.includes('image/')
    );
  }

  confirm() {
    const dialogRef = this.dialog.open(ConfirmModalComponent);
    dialogRef.componentInstance.title = 'Update confirm';
    dialogRef.componentInstance.content = 'Do you want to update this brand?';
    dialogRef.componentInstance.action = 'Yes';
    dialogRef.afterClosed().subscribe(result => {
      result ? this.onSave() : null;
    });
  }

}
