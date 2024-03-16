import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  Products,
  ProductsNameMap,
} from 'src/app/core/constants/products.constants';

@Component({
  selector: 'nautic-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  productNameMap = ProductsNameMap;
  products = Products;
  isDropdownOpen = false;

  constructor(private router: Router) {}

  showProducts(product: string) {
    this.toggleDropdown();
    this.router.navigate(['products', product]);
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
