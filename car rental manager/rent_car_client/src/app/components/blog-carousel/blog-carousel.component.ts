import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'blog-carousel',
  templateUrl: './blog-carousel.component.html',
  styleUrls: ['./blog-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogCarouselComponent implements OnInit {

  constructor() { }

  public blogs = [
    {
      img: 'assets/images/angular.png',
      title: 'My Favorite Tips and Tricks in Angular',
      descript: 'Angular comes with so many features, both popular and unknown, the easiest way to discover tricks to achieve difficult tasks using Angular is to use Angular a lot more and learn in the process. Here are my favorite Angular tips and tricks.',
      tech: 'Javascript',
      time: '15:03:00 Aug, 04 2019'
    },
    {
      img: 'assets/images/node.png',
      title: 'Build A RESTful Api With Node.js And Express.Js',
      descript: `In this tutorial, we’ll be learning how to build a Rest API in Node.js and Express.js by building a simple todo app API. This tutorial assumes an intermediate knowledge of javascript and experience working on the command line. The source code for the final project can be found here .
      Getting Started`,
      tech: 'NodeJs',
      time: '15:03:00 Jul, 09 2019'
    },
    {
      img: 'assets/images/react.png',
      title: 'Some cool React tips and tricks',
      descript: `After spending some time with React, I've learned a few nice tips and tricks to make your app as composable, declarative and maintainable as possible.`,
      tech: 'Javascript',
      time: '15:03:00 Jul, 09 2019'
    },
  ]


  ngOnInit() {
  }

}
