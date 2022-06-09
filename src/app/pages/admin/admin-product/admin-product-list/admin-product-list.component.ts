import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css'],
})
export class AdminProductListComponent implements OnInit {
  products: Product[];
  constructor(private prroductService: ProductService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.ongetList();
    };
    ongetList(){
      this.prroductService.getProducts().subscribe((data)=>{
        this.products =data;
      })
    }

  onDelete(id: String) {
   const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa?")
   if(confirmDelete && id){
    this.prroductService.deleteProduct(id).subscribe((data)=>{
      this.products =data;
      this.ongetList();
    })
   }
  }
}
