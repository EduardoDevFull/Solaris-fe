import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LowerCaseValidators } from 'src/app/shared/validators/lower-case.validators';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
  templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userNotTakenValidatorService: UserNotTakenValidatorService) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      fullName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      userName: ['',
        [
          Validators.required,
          LowerCaseValidators,
          Validators.minLength(2),
          Validators.maxLength(30)
        ],
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14)
        ]
      ]
    });
  }
 }
