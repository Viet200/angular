import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryType } from 'src/app/types/categories';
import { CategoryService } from '../../../../services/category.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {

  productForm: FormGroup;
  category: CategoryType[]
  productId : string ;
  constructor(
    private activeRoute : ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private categoryService:CategoryService
  ) {
    this.productForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32)
      ]),
      price: new FormControl('',[
        Validators.required
      ]),
      sale_price: new FormControl('',[
        Validators.required
      ]),

      image_url: new FormControl('',[
        Validators.required
      ]),
      description: new FormControl('',[
        Validators.required
      ]),
      status: new FormControl('',[
        Validators.required
      ]),

      category_id: new FormControl(0)
    })
    this.category =[];
    this.productId = "0";
  }

  ngOnInit(): void {
    this.productId = this.activeRoute.snapshot.params['id'];
    if(this.productId){
    this.productService.getProduct(this.productId).subscribe(data => {
      this.productForm.patchValue({
        name:data.name,
        price: data.price ,
        description: data.description,
        sale_price:data.sale_price,
        image_url:data.image_url,
        status:data.status
      });
    });
    }
  this.categoryService.listCate().subscribe(data =>{
    this.category = data;
  })
}

  onValidateNameProduct(control: AbstractControl): ValidationErrors | null {
    const { value } = control;
    if (!value.includes('products')) {
      return { hasProductError: true };
    }
    return null;
  }
  onSubmit() {
    const submitData = this.productForm.value;

    if (this.productId !== "" && this.productId !== undefined) {
      return this.productService.updateProduct(this.productId, submitData).subscribe(data => {
        this.router.navigateByUrl('/admin/products');
      });
    }

    // 2. Call API (Cần định nghĩa service và router điều hướng)
    return this.productService.addProducts(submitData).subscribe((data) => {
      // 3. Sau khi API call thành công sẽ điều hướng về danh sách
      // this.router.navigate(['/admin', 'products']);
      this.router.navigateByUrl('/admin/products');
    })
  }

}
