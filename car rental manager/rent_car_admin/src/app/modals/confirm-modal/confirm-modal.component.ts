import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  @Input() title: any;
  @Input() content: any;
  @Input() action: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
