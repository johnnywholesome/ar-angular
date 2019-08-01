import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }

  getChildPath(routeTemp: ActivatedRoute) {
    const temp = routeTemp.snapshot.url.map(u => u.path);
    if (routeTemp.children) {
      routeTemp.children.forEach(childRoute => {
        const temp2 = this.getChildPath(childRoute);
        temp.push(...temp2);
      });
    }
    return temp;
  }
}
