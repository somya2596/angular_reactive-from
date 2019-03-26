import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb:FormBuilder){}
   registrationForm = this.fb.group({
      userName:['',Validators.required],
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