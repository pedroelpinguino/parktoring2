import { Component, OnInit } from "@angular/core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.css"],
})
export class LayoutComponent implements OnInit {
  faBars = faBars;
  menuIsShowed: boolean;
  constructor() {}

  ngOnInit(): void {}
  toggleMenu() {
    this.menuIsShowed = !this.menuIsShowed;
  }
}
