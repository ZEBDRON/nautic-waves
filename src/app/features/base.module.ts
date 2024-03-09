import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { BaseRoutingModule } from './base-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsServicesComponent } from './products-services/products-services.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ProductsComponent,
    AboutUsComponent,
    FooterComponent,
    ProductsServicesComponent,
  ],
  imports: [CommonModule, BaseRoutingModule],
  exports: [HomeComponent, HeaderComponent, FooterComponent],
})
export class BaseModule {}
