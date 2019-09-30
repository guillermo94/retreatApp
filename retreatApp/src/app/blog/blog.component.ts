import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blog_title = 'BLOG';
  blog_paragraph = 'some paragraph some paragraph some paragraph some paragraph some paragraph some paragraph';

  constructor() { }

  ngOnInit() {
  }

}
