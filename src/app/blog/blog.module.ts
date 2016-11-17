import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { WordpressService } from '../wordpress.service';
import { BlogPostComponent } from './blog-post/blog-post.component';
import blogRoutes from './blog.routes';

@NgModule({
  imports: [
    CommonModule,
    blogRoutes
  ],
  declarations: [BlogComponent, BlogPostComponent],
  providers: [WordpressService]
})
export class BlogModule { }
