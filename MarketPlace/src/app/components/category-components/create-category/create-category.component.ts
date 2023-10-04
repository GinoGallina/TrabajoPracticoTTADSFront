import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {
  categoryForm: FormGroup;
  constructor(private form: FormBuilder, private categoryService:CategoryService){

    this.categoryForm = this.form.group({
      category:[''],
    })
  }

  onSubmit(){
    this.categoryService.createCategory(this.categoryForm.value).subscribe(res => {
      console.log(res)
    })
  }

}
