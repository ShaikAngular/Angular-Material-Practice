import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Angular-Mat-Tab-With-Components';
  
  navLinks: any[];
  activeLinkIndex = -1; 
  background = 'red';
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Test',
            link: './test',
            index: 0
        }, 
        {
            label: 'Test1',
            link: './test1',
            index: 1
        }, 
        {
            label: 'Test2',
            link: './test2',
            index: 2
        },
        {
          label: 'Test3',
          link: './test3',
          index: 3
      } 
    ];
}

ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}

}
