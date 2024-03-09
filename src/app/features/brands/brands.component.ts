import { Component } from '@angular/core';
import { MajorBrands } from 'src/app/core/constants/products.constants';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent {
  majorBrands = MajorBrands;
}
