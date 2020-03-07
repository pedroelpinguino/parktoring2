import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuIsShowed:boolean;
  userIsLoged: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    console.log('hiciste click')
      if(this.menuIsShowed){
        this.menuIsShowed = false;
      } else{
        this.menuIsShowed = true;
      }  
  }
}
