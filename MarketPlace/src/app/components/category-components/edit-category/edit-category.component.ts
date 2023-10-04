import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent {
  constructor(private categoryService: CategoryService,private route:ActivatedRoute
){}
  categoryId !: Number;
  categoryFormEdit!: FormGroup;
ngOnInit(): void {
  this.categoryId = this.route.snapshot.params['id'];
  this.categoryService.getOneCategory(this.categoryId).subscribe((category:any) => {
    this.categoryFormEdit.setValue({
      category: category.category,
      state: category.state
    })
    console.log(this.categoryFormEdit.value)
  })

}


onSubmit() {
  console.log(this.categoryFormEdit.value);
}

  

}
