import { Route } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { RouterModule } from '@angular/router';

export const BlogRoutes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: '/blog' },
    { path: 'blog', component: BlogComponent },
    { path: 'blog/:id', component: BlogPostComponent }
]

export default RouterModule.forRoot(BlogRoutes);
