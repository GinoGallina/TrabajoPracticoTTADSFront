import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review-services/review.service';
import { NotificationService } from 'src/app/services/notification-services/notification.service';
@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css'],
})
export class CreateReviewComponent implements OnInit {
  reviewForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private reviewService: ReviewService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.reviewForm = this.formBuilder.group({
      comment: ['', [Validators.required, Validators.maxLength(150)]],
      rate: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(5),
      ]),
    });
  }

  onSubmit() {
    if (this.reviewForm.valid) {
      this.reviewService.createReview(this.reviewForm.value).subscribe(
        (res) => {
          this.notificationService.showSuccessNotification(
            'Review created successfully'
          );
        },
        (error) => {
          this.notificationService.showErrorNotification(
            `Failed to create review: ${error.error.error}`
          );
        }
      );
    } else {
      console.log('Invalid form data');
    }
  }
}
