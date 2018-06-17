import { Component, OnInit } from '@angular/core';
import { Woman } from '../domain/woman';
import { Util } from '../shared/util';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  women: Woman[];
  sortField: string;
  sortOptions = [
    {label: 'Sort by lastname', value: 'lastname'},
    {label: 'Sort by firstname', value: 'firstname'}
  ];

  constructor() { }

  ngOnInit() {
    this.women = Util.getData();
  }

  onSortChange(event) {
    this.sortField = event.value;
  }

}
