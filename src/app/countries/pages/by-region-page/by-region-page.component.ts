import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {
  countries: Country[] = []

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
  }

  searchByRegion(term: string): void {
    this.countriesService.searchRegion(term).subscribe((countries: Country[]) => this.countries = countries)
  }

}
