import { Component, OnInit } from '@angular/core';
import { MajorBrands } from 'src/app/core/constants/products.constants';
import { BrandLogo } from 'src/app/models/base.model';

@Component({
  selector: 'nautic-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  majorBrands = MajorBrands;
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

  companyLogos = [
    {
      imageUrlweb: '../../../../../assets/images/temp-logos/airbase-full.svg',
      imageAlt: 'airbase',
      name: 'airbase',
    },
    {
      imageUrlweb: '../../../../../assets/images/temp-logos/bigBasket.svg',
      imageAlt: 'bigBasket',
    },
    {
      imageUrlweb: '../../../../../assets/images/temp-logos/1knetworks.svg',
      imageAlt: '1knetworks',
    },
    {
      imageUrlweb: '../../../../../assets/images/temp-logos/acceldata-full.svg',
      imageAlt: 'HCL',
    },
    {
      imageUrlweb: '../../../../../assets/images/temp-logos/Aganitha-full.svg',
      imageAlt: 'Aganitha',
    },
    {
      imageUrlweb: '../../../../../assets/images/temp-logos/bain.svg',
      imageAlt: 'bain',
    },
  ];

  navigateToProducts(): void {
    window.open('/products-services', '_blank');
  }
}
