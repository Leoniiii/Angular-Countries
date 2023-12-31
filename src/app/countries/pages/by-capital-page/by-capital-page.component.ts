import { Component, OnInit, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {
  countries: Country[] = []
  constructor(private countriesService: CountriesService) {

  }

  ngOnInit(): void {
  }

  searchByCapital(term: string): void {
    this.countriesService.searchCapital(term).subscribe((countries: Country[]) => this.countries = countries)

  }

}
