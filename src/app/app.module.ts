import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, ProductListComponent, FooterComponent, ProductComponent, HomeComponent, NotFoundComponent],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
