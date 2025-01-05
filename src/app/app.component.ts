import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { ProductsService } from '../services/products/products.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'LiquorIslandClient';

  constructor(private httpClient:HttpClient, 
    private productsService:ProductsService){}

  products:Product[]=[];

  

  ngOnInit(){

    this.productsService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
