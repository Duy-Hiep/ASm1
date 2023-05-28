import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  product : IProduct = {
    name: '',
    price: 0
  }

  productForm = this.formBuilder.group({
    name: [''],
    price: [0]
  })

  constructor(private productService : ProductService, 
    private route : ActivatedRoute,
    private formBuilder : FormBuilder){
      this.route.paramMap.subscribe(param => {
        const id = Number(param.get("id"))

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
      if(this.productForm.invalid) return;

      const product: IProduct =  {
        id: this.product.id,
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0
      }

      this.productService.updateProduct(product).subscribe(data => {
        console.log(data);
        
      })
    }
}
