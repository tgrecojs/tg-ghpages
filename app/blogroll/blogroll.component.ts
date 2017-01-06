import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { BlogService } from '../shared/blog/blog.service';

@Component({
  moduleId: module.id,
  selector: 'sd-blog',
  styleUrls : ['blogroll.component.css'],
  templateUrl : 'blogroll.component.html'
})


export class BlogrollComponent implements OnInit {
 posts$: any;
  randomPost$: any;
  blogUrl = 'http://54.209.113.46/wp-json/wp/v2/posts';
  focusedPost = false;
randomPostUrl = `${this.blogUrl}?filter[orderby]=rand&filter[posts_per_page]=1`;
  constructor(private http: Http, private wpService: BlogService) {
    this.posts$ = this.wpService.getAll();
  }


  ngOnInit() {
    console.log('hello `Blog` component');
  }


}
