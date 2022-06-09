import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProductService } from 'src/app/services/product.service';
import { Product,ProductCart } from 'src/app/types/Product';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css']
})
export class DetailClientComponent implements OnInit {

  id:any;
  product:Product;
  cartValue:Number;

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
    private lsService: LocalStorageService
  ){
    this.id="0";
    this.product={
      _id:"",
      name:'',
      price: 123,
    sale_price:122,
    description: "String",
    image_url:"String",
    category_id:2,
    status: 1
    };
    this.cartValue=1;
   }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params["id"];
    console.log(this.id);
    this.productService.getProduct(this.id).subscribe((data) => {
      this.product = data;
      console.log(data);

     })


  }
  onChangeCartValue(event:any){
    this.cartValue = event.target.value;

  }
  onAddToCart() {
    const addItem = {
      ...this.product,
      value: +this.cartValue
    };

    this.lsService.setItem(addItem);
    this.cartValue = 1;

  }

}
