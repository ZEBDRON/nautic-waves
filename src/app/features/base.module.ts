import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { BaseRoutingModule } from './base-routing.module';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, ProductsComponent],
  imports: [CommonModule, BaseRoutingModule],
  exports: [HomeComponent, HeaderComponent],
})
export class BaseModule {}
