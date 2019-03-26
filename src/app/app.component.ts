import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms'; 
import { forbiddenNameValidator } from './shared/user-name.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  get userName(){
    return this.registrationForm.get('userName')
  }
  constructor(private fb:FormBuilder){}
   registrationForm = this.fb.group({
    userName:["",[Validators.required,Validators.minLength(3),forbiddenNameValidator(/hi/)]],
    password:[''],
    confirmPassword:[''],
    address: this.fb.group({
      city:[''],
      state:[''],
      postalCode:['']
    })
    });

  loadApiData(){
    this.registrationForm.patchValue({
    userName:'somya',
    password: 'test',
    confirmPassword:'test',
  });
  }
ngOnit(){}
}
