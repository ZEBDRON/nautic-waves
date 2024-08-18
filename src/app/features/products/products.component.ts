import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import {
  Products,
  ProductsImageMap,
  ProductsNameMap,
} from 'src/app/core/constants/products.constants';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  activePage = Products.Navigation;
  title = ProductsNameMap[this.activePage];
  productsMap = ProductsNameMap;
  productsImageMap = ProductsImageMap;
  images: string[] = [];
  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      console.log(params['page']);
      if (params['page']) {
        this.activePage = params['page'];
        this.title = ProductsNameMap[this.activePage];
        this.images = ProductsImageMap[this.activePage];
      }
    });
  }

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }
    });
  }
}
