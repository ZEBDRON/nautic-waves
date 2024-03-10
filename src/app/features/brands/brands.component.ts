import { Component } from '@angular/core';
import {
  MajorBrands,
  OtherBrands,
} from 'src/app/core/constants/products.constants';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent {
  majorBrands = MajorBrands;
  otherBrands = OtherBrands;
}
