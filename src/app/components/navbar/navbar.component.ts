import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
})
export class NavbarComponent implements OnInit {
  menuIsShowed: boolean;
  userIsLoged: boolean = true;

  constructor() {}

  ngOnInit(): void {
    window.addEventListener("scroll", this.onScroll);
  }

  toggleMenu() {
    this.menuIsShowed = !this.menuIsShowed;
  }

  private onScroll() {
    console.log(window.scrollY);
  }
}
