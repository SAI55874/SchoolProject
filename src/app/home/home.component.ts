import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { Location } from '@angular/common';
// import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  isActive!:boolean

  isTokenActive(){
    if(localStorage.getItem('token')==null){
      this.isActive=true;
    }
    else{
      this.isActive=false;
    }
  }

constructor(private router:Router){}
  ngOnInit(): void {
   this.isTokenActive();
  }
  async logout(){
    localStorage.removeItem('token')
    if(localStorage.getItem('token')==null){
    alert("Logout Sucess")
    await this.router.navigate(['dashboard'])
    window.location.reload()
  }
    else{
      alert("Something wrong")
    }
  }
}
