import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from "../shared/product.service";
import {FormControl} from "@angular/forms";
import  'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-productor',
  templateUrl: './productor.component.html',
  styleUrls: ['./productor.component.css']
})
export class ProductorComponent implements OnInit {

  products: Observable<Product[]>;
  keyword: string;
  productsHttp: Array<any> = [];
  titleFilter: FormControl = new FormControl;
  constructor(private productService: ProductService, private http: HttpClient) {
    this.titleFilter.valueChanges
      .debounceTime(500)
      .subscribe(value => this.keyword = value);
    //this.products = this.http.get<Product[]>('/api/products');//get方法只是定义了一个http请求
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  /*  this.dataSource.subscribe(res => {//请求订阅http请求发出
      this.products = res;
    });*/
  this.productService.searchEvent.subscribe(
    params => {
      this.products = this.productService.getSearch(params);
      console.log(this.products);
    }
  );
  }

}
