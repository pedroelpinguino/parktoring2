import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
menuisShowed:boolean;
userIsLoged: boolean= false; 
  constructor() { }

  ngOnInit(): void {
  }
toggleMenu(){
   console.log('Hiciste click en la barraa nav')
  if(this.menuisShowed){
this.menuisShowed=false;

  }
  else{
this.menuisShowed=true;

  }
}


}
