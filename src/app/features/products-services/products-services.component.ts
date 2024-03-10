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
      image:
        'https://www.navteam.com/components/com_redshop/helpers/thumb.php?filename=category/1346321378_Category_navigation.jpg&newxsize=145&newysize=&swap=0',
    },
    {
      page: Products.LifeSaving,
      name: 'Life Saving Equipment',
      image:
        'https://www.navteam.com/components/com_redshop/assets/images/product/1614853796_JRCandNCRand333andproduct.jpg',
    },
    {
      page: Products.FireFighting,
      name: 'Fire fighting Equipment',
      image:
        'https://www.navteam.com/components/com_redshop/helpers/thumb.php?filename=product/1345135625_JLR-21.jpg&newxsize=215&newysize=215&swap=0',
    },
    {
      page: Products.Indicators,
      name: 'Distress Signals, Signs & Flags',
      image:
        'https://www.navteam.com/components/com_redshop/helpers/thumb.php?filename=product/1383747050_JLN-652.jpg&newxsize=215&newysize=215&swap=0',
    },
    {
      page: Products.Electrics,
      name: 'Marine Electrical Products',
      image:
        'https://www.navteam.com/components/com_redshop/helpers/thumb.php?filename=product/1543244901_JFC-800and810andmain215x215.jpg&newxsize=215&newysize=215&swap=0',
    },
  ];
  constructor(private router: Router) {}

  showProducts(page: string) {
    this.router.navigate(['products', page]);
  }
}
