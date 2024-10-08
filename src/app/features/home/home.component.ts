import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MajorBrands } from 'src/app/core/constants/products.constants';
import { BrandLogo } from 'src/app/models/base.model';

@Component({
  selector: 'nautic-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slide', [
      state(
        'start',
        style({
          transform: 'translateX(-100%)',
        })
      ),
      state(
        'end',
        style({
          transform: 'translateX(100%)',
        })
      ),
      transition('start => end', [animate('2s linear')]),
      transition('end => start', [animate('2s linear')]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  majorBrands = MajorBrands;
  images = this.majorBrands.map((brand) => brand.logo);
  constructor() {}
  ngOnInit(): void {
    // this.generateRandomMargins();
  }

  // generateRandomMargins(): void {
  //   for (let i = 0; i < this.majorBrands.length; i++) {
  //     const margin = `${this.getRandomInt(10, 10)}px`;
  //     this.brandLogos.push({
  //       margin,
  //       name: this.majorBrands[i].name,
  //       logo: this.majorBrands[i].logo,
  //     });
  //   }
  // }

  // getRandomInt(min: number, max: number): number {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
  // }

  navigateToProducts(): void {
    window.open('/products-services', '_blank');
  }
}
