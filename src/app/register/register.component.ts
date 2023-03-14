import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../shared/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerUserData:any={}
  registerForm:FormGroup;
  constructor(private formbuilder: FormBuilder,private api : ServiceService){
    this.registerForm=this.createForm();
    }
  
createForm():FormGroup{
      return this.formbuilder.group({

      })
   }

registerUser() {
console.log(this.registerUserData);
this.api.addUser(this.registerUserData).subscribe(res=>{
  alert("Registration sucess sucessfully");
  let ref = document.getElementById('login');
  ref?.click();
},err=> {alert("Something wrong")})
}



  ngOnInit(): void {
    this.registerForm=this.formbuilder.group({
      name:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required],
      role:['',Validators.required]
    })
  }

}
