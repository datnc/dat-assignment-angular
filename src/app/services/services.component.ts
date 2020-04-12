import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import { Product } from "../Product";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
products : Product[];
  constructor(
        private productService : ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }
getProducts(){
  this.productService.getProducts().subscribe(data =>{
    this.products = data;
  })
}
deleteProduct(id){
  this.productService.deleteProduct(id).subscribe(response => {
   this.products = this.products.filter(product => product.id != response.id);
  })
}
}