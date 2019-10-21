import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../product-list/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

productList = [];

constructor(private productListService : ProductListService) { }

ngOnInit() {
  this.productListService.getProductList().subscribe((data: any[])=>{
        console.log(data);
        this.productList = data;
   })
  }

}
