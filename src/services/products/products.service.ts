import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

   private APIUrl= environment.apiUrl+"api/products/";
  
    constructor(private httpClient:HttpClient){
      
    }
  
    getProducts():Observable<Product[]>{
      return this.httpClient.get<Product[]>(this.APIUrl+"GetProducts").pipe(
        catchError(()=>[]) 
      );
    }
}
