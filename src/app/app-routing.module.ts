import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductComponent } from './pages/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';

const routes: Routes = [
  {path: '', component: AdminLayoutComponent, children:[
    {path: '', redirectTo:"product", pathMatch: 'full'},
    {path: 'product', component: ProductComponent},
    {path: 'productAdd', component: ProductAddComponent},
    {path: 'productEdit/:id', component: ProductEditComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
