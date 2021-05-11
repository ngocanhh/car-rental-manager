import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

  @Input('blog') blog: any;

  constructor() { }

  ngOnInit() {
  }

}
