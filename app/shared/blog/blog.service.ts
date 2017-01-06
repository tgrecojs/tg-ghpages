import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Post } from './post';
import { Comment } from './comment';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class BlogService {
  postId: number;
 apiUrl = 'http://54.209.113.46/wp-json/wp/v2/posts';
 commentUrl = 'http://54.209.113.46/wp-json/wp/v2/comments';
  constructor(private http: Http ) {
  }

  get(id: number): Observable<Post> {
    let post$ = this.http
      .get(`${this.apiUrl}/${id}`)
      .map(mapPost);
      return post$;
  }

    getComments(id: number): Observable<Comment[]> {
    let comments$ = this.http
      .get(`${this.commentUrl}?post=${id}`)
      .map(mapComments);
      return comments$;
  }

  getAll(): Observable<Post[]> {
    let posts$ = this.http
      .get(`${this.apiUrl}`)
      .map(mapPosts);
      return posts$;
  }
  /**
   * @function addComment
   * @param {object} comment
   */
   addComment (comment: any): Observable<Comment[]> {
    let body = ({
    postId : this.postId,
    user: comment.author_name,
    email: comment.author_email,
    content: comment.content,
    date: comment.date
    });
    let headers = new Headers({ 'enctype': 'multipart/form-data'});
        let options       = new RequestOptions({ headers: headers }); // Create a request option

    let newComment$ = this.http.post(this.commentUrl, body, options)
                        .map(mapComments);
                        return newComment$;
  }


}

function mapComments(response: Response): Comment[] {
   return response.json().map(toComment);
}


function mapPosts(response: Response): Post[] {
   // The response of the API has a results
   // property with the actual results
   return response.json().map(toPost);
}

function toComment(r: any) {
  let comment = ({
    id : r.id,
    user: r.author_name,
    email: r.author_email,
    content: r.content,
    date: r.date
  });
  console.log('Parsed comments:', comment);
  return comment;
};


function toPost(r: any): Post {
  let post = <Post>({
    id: r.id,
    slug: r.slug,
    title: r.title,
    excerpt: r.excerpt,
    content: r.content,
    date: r.date,
  img: r.better_featured_image
  });
  console.log('Parsed Post:', post);
  return post;
}

function mapPost(response: Response): Post {
   // topost looks just like in the previous example
   return toPost(response.json());
}


