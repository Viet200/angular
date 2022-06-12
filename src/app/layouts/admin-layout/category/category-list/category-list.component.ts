import { Component, OnInit } from '@angular/core';
import { CategoryType } from 'src/app/types/categories';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  category: CategoryType[]
  constructor(private categoryService: CategoryService) {
    this.category=[]
   }

   ngOnInit(): void {
    this.categoryService.listCate().subscribe((data)=>{
      this.category = data;
    })
  }

  onDelete(_id: number){
    const confirmDelete = confirm('Bạn chắc chắn muốn xóa không!');
    if(confirmDelete && _id){
      this.categoryService.deleteCate(_id).subscribe((data)=>{
        console.log(data);
        this.ngOnInit()
      })
    }
  }
}
