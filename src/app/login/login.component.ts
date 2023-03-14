import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../shared/service.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 
  constructor(private api :ServiceService,private router:Router){

  }


 loginUserData:any={}
 loginForm = new FormGroup({
  userName: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required)
});
 
  loginUser(){
  // console.log(this.loginUserData);
  this.api.loginUser(this.loginUserData).subscribe(
    async res =>{
      alert("login Sucess")
    localStorage.setItem('token',res)
    console.log(localStorage.getItem('token'))
    await this.router.navigate([''])
    window.location.reload()
    
},
    err =>{alert("Somthing went wrong")
    console.log(err);
  })
    }
 
  ngOnInit(): void {
   
  }



}
