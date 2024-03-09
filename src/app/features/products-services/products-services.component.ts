import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-services',
  templateUrl: './products-services.component.html',
  styleUrls: ['./products-services.component.scss'],
})
export class ProductsServicesComponent {
  prodcuts = [
    'Navigation and Communication Equipment',
    'Life Saving Equipment',
    'Fire fighting Equipment',
    'Distress Signals, Signs & Flags',
    'Marine Electrical Products  ',
  ];
  constructor(private router: Router) {}
}
