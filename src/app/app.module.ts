import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {SearchComponent} from './search/search.component';
import {CarouselComponent} from './carousel/carousel.component';
import {ProductorComponent} from './productor/productor.component';
import {StarsComponent} from './stars/stars.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {HomeComponent} from './home/home.component';
import {Product1Component} from './product1/product1.component';
import {Product2Component} from './product2/product2.component';
import {ProductService} from "./shared/product.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FilterPipe } from './pipe/filter.pipe';
import {HttpClientModule} from "@angular/common/http";
import {WebSocketService} from "./shared/web-socket.service";
import { WebSocketComponent } from './web-socket/web-socket.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";



const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product/:productId',
    component: ProductDetailComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductorComponent,
    StarsComponent,
    ProductDetailComponent,
    HomeComponent,
    Product1Component,
    Product2Component,
    FilterPipe,
    WebSocketComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductService, WebSocketService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
