import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/types/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.css']
})
export class HomeClientComponent implements OnInit {

  products: Product[];
  constructor(private prroductService: ProductService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.ongetList();
  }
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
