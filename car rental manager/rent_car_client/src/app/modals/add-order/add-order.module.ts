import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOrderComponent } from './add-order.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddOrderComponent],
  imports: [
    CommonModule,
    NgbModalModule,
    ReactiveFormsModule
  ],
  exports: [AddOrderComponent],
  entryComponents: [AddOrderComponent]
})
export class AddOrderModule { }
