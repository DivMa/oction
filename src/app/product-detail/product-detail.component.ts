import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Comment, Product, ProductService} from "../shared/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  //private productTitle: string;
  product: Product;
  comments: Comment[];
  newRating: number = 5;
  newComment: string = "";
  isCommentHidden: boolean = true;

  constructor(private routeInfo: ActivatedRoute,
              private productService: ProductService) {
  }

  ngOnInit() {
    //this.productTitle = this.routeInfo.snapshot.params['title'];
    const productId: number = this.routeInfo.snapshot.params['productId'];
    this.productService.getProduct(productId).subscribe(
      product => this.product = product[0]
    );

    this.productService.getCommentsForProduct(productId).subscribe(
      comments => this.comments = comments
    );
  }
  addComment() {
    const comment = new Comment(0, this.product.id, new Date().toISOString(), 'me', this.newRating, this.newComment);
    this.comments.unshift(comment);
    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    this.product.rating = sum / this.comments.length;
    this.newComment = "";
    this.newRating = 5;
    this.isCommentHidden = true;
  }
}
