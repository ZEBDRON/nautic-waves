import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/core/constants/products.constants';

@Component({
  selector: 'app-products-services',
  templateUrl: './products-services.component.html',
  styleUrls: ['./products-services.component.scss'],
})
export class ProductsServicesComponent {
  prodcuts = [
    {
      page: Products.Navigation,
      name: 'Navigation and Communication Equipment',
    },
    { page: Products.LifeSaving, name: 'Life Saving Equipment' },
    { page: Products.FireFighting, name: 'Fire fighting Equipment' },
    { page: Products.Indicators, name: 'Distress Signals, Signs & Flags' },
    { page: Products.Electrics, name: 'Marine Electrical Products' },
  ];
  constructor(private router: Router) {}

  showProducts(page: string) {
    this.router.navigate(['products', page]);
  }
}
