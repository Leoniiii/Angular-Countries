import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styles: [
    `img{
      width: 25px
     } 
     `
  ]
})
export class CountriesTableComponent implements OnInit {
  @Input() countries: Country[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
