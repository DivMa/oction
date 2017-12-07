import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
@Injectable() //装饰器
export class ProductService {
  searchEvent: EventEmitter<ProductSearchParams> = new EventEmitter();
  constructor(private http: HttpClient) {
  }

  /*private products: Product[] = [
   new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品', ['电子产品', '科技']),
   new Product(2, '第二个商品', 1.99, 2.5, '这是第一个商品', ['图书', '科技']),
   new Product(3, '第三个商品', 1.99, 1.5, '这是第一个商品', ['硬件设备', '科技']),
   new Product(4, '第四个商品', 1.99, 4.5, '这是第一个商品', ['电子产品', '科技']),
   new Product(5, '第五个商品', 1.99, 5, '这是第一个商品', ['电子产品', '硬件设备']),
   new Product(6, '第六个商品', 1.99, 2, '这是第一个商品', ['电子', '科技'])
   ];*/
  /*  private comments: Comment[] = [
   new Comment(1, 1, '2017-02-02 23:45:59', "张三", 3, '东西不错'),
   new Comment(2, 1, '2017-02-01 23:45:59', "张四", 4, '东西不错'),
   new Comment(3, 2, '2017-01-01 23:45:59', "张五", 4, '东西不错')
   ];*/
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
    //return this.http.get('/api/products').map(res => res.json);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>('/api/product/' + id);
  }

  getCommentsForProduct(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>('/api/product/' + id + '/comments');
  }

  getSearch(params: ProductSearchParams): Observable<Product[]> {
    console.log(this.saliData(params));
    //return this.http.get<Product[]>('/api/products?' + this.saliData(params));
    return this.http.get<Product[]>('/api/products?param=' + JSON.stringify(params));
  }

   encodeParams(params: ProductSearchParams) {
    let result: URLSearchParams;
    result = Object.keys(params)
      .filter(key => params[key])
      .reduce((sum: URLSearchParams, key: string) => {
         sum.append(key, params[key]);
         return sum;
      }, new URLSearchParams());
    return result;
  }
  saliData(params) {
    let result = '';
    for (const k in params) {
      if (k !== '') {
        result += k + '=' + params[k] + '&';
      }
    }
    return result.substr(0, result.length - 1);
  }
  getAllCategories(): string[] {
    return ['电子产品', '图书', '硬件设备', '科技'];
  }
}
export class ProductSearchParams {
  constructor(public title: string,
              public price: number,
              public category: string) {

  }
}
export class Product {
  constructor(public id: number,
              public title: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {
  }
}
export class Comment {
  constructor(public id: number,
              public productId: number,
              public timestamp: string,
              public user: string,
              public rating: number,
              public content: string) {
  }
}
