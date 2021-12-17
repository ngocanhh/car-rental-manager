import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from 'app/services/brand.service';

@Component({
  selector: 'app-add-new-brand',
  templateUrl: './add-new-brand.component.html',
  styleUrls: ['./add-new-brand.component.css']
})
export class AddNewBrandComponent implements OnInit {

  brandForm: FormGroup;
  id: any;
  logo;

  constructor(private brandService: BrandService, private route: ActivatedRoute, private router: Router) {
    this.brandForm = new FormGroup({
      name: new FormControl(null),
      file: new FormControl(null),
      nation: new FormControl(null),
    });
  }

  ngOnInit(): void {

  }

  onSave() {
    const formData: FormData = new FormData();
    formData.append('file', this.brandForm.controls.file.value);
    let data = {
      nation: this.brandForm.controls.nation.value,
      name: this.brandForm.controls.name.value
    }
    this.brandService.createBrand(data).subscribe((res: any) => {
      if (res.status == 'Ok') {
        this.brandService.uploadImage(res.data.id, formData).subscribe((res: any) => {
          if (res.status == 'Ok') {
            this.router.navigate(['/brand'])
          }
        })
      }
    })
  }

  handleFileInput(files: FileList) {
    if (files.length > 0 && this.validationInput(files[0])) {
      this.brandForm.controls.file.setValue(files[0]);
      console.log(files[0]);
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



}
