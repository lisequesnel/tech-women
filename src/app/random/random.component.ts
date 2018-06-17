import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Woman } from '../domain/woman';
import { Util } from '../shared/util';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  woman: Woman;

  constructor() { }

  ngOnInit() {
    const index: number = Util.randomizeData();
    this.woman = Util.getData()[index];
  }

}
