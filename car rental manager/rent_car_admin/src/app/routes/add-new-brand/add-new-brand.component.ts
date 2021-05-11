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

  constructor(private brandService: BrandService, private route: ActivatedRoute, private router: Router) {
    this.brandForm = new FormGroup({
      name: new FormControl(null),
      logo: new FormControl(null),
      nation: new FormControl(null),
    });
  }

  ngOnInit(): void {

  }

  onSave() {
    const req = {
      ...this.brandForm.value
    }
    this.brandService.createBrand(req).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/brand'])
    })
  }

}
