import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../../../services/category.service';


@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  cateForm: FormGroup;
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.cateForm =new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32)
      ])
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    const submitData = this.cateForm.value;
    return this.categoryService.addCate(submitData).subscribe(data => {
      this.router.navigateByUrl('/admin/category')
    })
  }

}
