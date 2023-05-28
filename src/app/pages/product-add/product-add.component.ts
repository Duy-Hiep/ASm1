import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  constructor(private formBuilder: FormBuilder, private productService: ProductService){}

  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(6)]],
    price: [0]
  })

  onHandleSubmit(){
    if(this.productForm.invalid)return;

    const product: IProduct = {
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0
    }

    this,this.productService.addPRoduct(product).subscribe(data => {
      console.log(data);
      
    })
  }
}
