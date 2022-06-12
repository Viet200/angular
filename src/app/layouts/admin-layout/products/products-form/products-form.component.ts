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
  constructor(
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
    this.category =[]
  }

  ngOnInit(): void {
    this.categoryService.listCate().subscribe(data=>{
      this.category = data
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

    console.log(this.productForm.value);
    const submitData = this.productForm.value;
    return this.productService.addProducts(submitData).subscribe(data => {
      this.router.navigateByUrl('/admin/products')
    })
  }

}
