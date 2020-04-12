import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ServicesComponent } from './services/services.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';



const routes: Routes = [
  {path: '',redirectTo:'home',pathMatch:'full'},
  {path: 'home',component:HomeComponent},
  {path:'product',component:ProductListComponent},
  {path:'services',component:ServicesComponent},
  {path:'product/detail/:id',component:ProductDetailComponent},
  {path: 'product/add', component:ProductAddComponent},
  {path: 'product/edit/:id', component:ProductEditComponent},
  {path: '404',component:NotFoundComponent},
  {path: '**',redirectTo:'404', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
