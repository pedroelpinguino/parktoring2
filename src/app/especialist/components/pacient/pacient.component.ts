import { Component, OnInit } from '@angular/core';
import { faCalendarPlus, faSearch, faComment , faFilter} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pacient',
  templateUrl: './pacient.component.html',
  styleUrls: ['./pacient.component.css']
})
export class PacientComponent implements OnInit {
  faCalendarPlus = faCalendarPlus;
  faSearch = faSearch;
  faComment = faComment;
  faFilter = faFilter;
  constructor() { }

  ngOnInit(): void {
  }

}
