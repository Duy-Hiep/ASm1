import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  product: IProduct = {
    name: '',
    price: 0
  }

  productForm = this.formBuilder.group({
    name: [''],
    price: [0]
  })
 

  constructor(private formBuilder: FormBuilder, private productService : ProductService, private route : ActivatedRoute, private router : Router){
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.productService.getProductById(id).subscribe(product => {
        this.product = product
        this.productForm.patchValue({
          name: product.name,
          price: product.price
        })
      })
    })
  }

  onHandleSubmit(){
    const product: IProduct = {
      id: this.product.id,
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0
    }

    this.productService.updateProduct(product).subscribe(data => {
      console.log(data);
      
    })
    alert("Sua San Pham Thanh Cong")
    this.router.navigate(['/product'])
  }
  
}
