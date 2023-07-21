import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: IProduct[] = [];

  constructor(private productService: ProductService){}

  ngOnInit(){
    this.productService.getProduct().subscribe(data => {
      this.products = data
    })
  }

  removeItem(id: any){
    this.productService.removeProduct(id).subscribe(() => {
      this.products = this.products.filter(item => item.id !== id)
    })
  }
}
