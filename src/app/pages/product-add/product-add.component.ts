import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  constructor(private formBuilder: FormBuilder, private productService : ProductService, private router : Router){}

  productForm = this.formBuilder.group({
    name: [''],
    price: [0]
  })

  onHandleSubmit(){
    const product: IProduct = {
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0,
    }

    this.productService.addProduct(product).subscribe(data => {
      console.log(data);
      
    })
    alert("Them San Pham Thanh Cong")
    this.router.navigate(['/product'])
  }
}
