import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private REST_API_SERVER = "http://localhost:4200/";

  constructor(private httpClient: HttpClient) { }

  public getProductList() {
    return this.httpClient.get(this.REST_API_SERVER);
  }

}
