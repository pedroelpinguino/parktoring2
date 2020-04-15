import { Component, OnInit } from '@angular/core';
import { faCalendarPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
type date = {
  id: number | string;
  pacient: string;
  date: string;
};

const DATES: Array<date> = [
  {
    id: 1,
    pacient: "Alejandro Fernandez",
    date: "11/08/2020",
  },
  {
    id: 2,
    pacient: "Fernando Martinez",
    date: "11/08/2020",
  },
  {
    id: 3,
    pacient: "Marco Casas",
    date: "11/08/2020",
  },
  {
    id: 4,
    pacient: "Martin acosta",
    date: "11/08/2020",
  },
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faCalendarPlus = faCalendarPlus;
  faSearch = faSearch;
  dates = DATES;
  constructor() {}

  ngOnInit(): void {}

}
