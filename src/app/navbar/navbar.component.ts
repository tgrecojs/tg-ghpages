import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 navs = [
    { url: '/blog', content: 'Blog' },
    { url: '/contact-me', content: 'Contact Me' }
  ];
  constructor(private router : Router, private route: ActivatedRoute) {

  }
  goToBlog() {
        let link = ['/blog'];
        this.router.navigate(link);
        console.log(this.route);
  }
  goToContact() {
        let link = ['/contact-me'];
        this.router.navigate(link);
        console.log(this.route);
  }
}
