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
        'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/products%2FEPIRB.jpg?alt=media&token=a7e11f15-443e-46f3-9061-e87dbc04d853',
    },
    {
      page: Products.LifeSaving,
      name: 'Life Saving Equipment',
      image:
        'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/products%2FLIFE%20RAFT.jpg?alt=media&token=f251d5ad-2612-49e6-b1dc-cdc411e61ff7',
    },
    {
      page: Products.FireFighting,
      name: 'Fire fighting Equipment',
      image:
        'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/products%2Ffire-extinguisher.jpg?alt=media&token=ae073db4-7570-4698-b14d-b560b7ed94de',
    },
    {
      page: Products.Indicators,
      name: 'Distress Signals, Signs & Flags',
      image:
        'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/products%2FIkarosMOB.jpg?alt=media&token=e1222523-089a-4f39-89f8-dcf787073479',
    },
    {
      page: Products.Electrics,
      name: 'Marine Electrical Products',
      image:
        'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/products%2F17A.jpeg?alt=media&token=d286416a-5f7a-4630-b638-955c3306b30d',
    },
  ];
  constructor(private router: Router) {}

  showProducts(page: string) {
    this.router.navigate(['products', page]);
  }
}
