import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
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
  isMobileMenuOpen = false;

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Products & Services',
        icon: 'pi pi-palette',
        url: '/products-services',
      },
      {
        label: 'Brands',
        icon: 'pi pi-link',
        url: '/brands',
      },
      {
        label: 'About Us',
        icon: 'pi pi-home',
        url: '/about-us',
      },
    ];
  }

  // Toggles the mobile menu for smaller screens
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  constructor(private router: Router) {}

  showProducts(product: string) {
    this.toggleDropdown();
    this.router.navigate(['products', product]);
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
