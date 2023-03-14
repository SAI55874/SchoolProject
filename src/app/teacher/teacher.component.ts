import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators}from '@angular/forms';
import { ServiceService } from '../shared/service.service';
import { TeacherModel } from './teacher';
import { Router } from '@angular/router';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit{
  teacherForm:FormGroup;
  teacherData:any;
  teacherModelObj:TeacherModel=new TeacherModel();
  showAdd!:boolean;
  showUpdate!:boolean;
  token=localStorage.getItem('token');
  
  constructor(private formbuilder: FormBuilder,private api : ServiceService,private router:Router) {
    this.teacherForm=this.createForm();
   }

   createForm():FormGroup{
      return this.formbuilder.group({

      })
   }

   ngOnInit():void{
   
    this.teacherForm=this.formbuilder.group({
      teacherName: ['', Validators.required],
      subject: ['', Validators.required],
      expInYears: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      teachingCategory: ['', Validators.required]
    })
    this.getAllTeacher();

   
   }
    

  getAllTeacher(){
    this.api.getTeachers().subscribe(res=>{
      this.teacherData =res;
    },err=>{
      if(err.status==403){
        alert("Please login")
        this.router.navigate(['login'])
      }
    })
  }

  clickAddTeacher(){
    this.teacherForm.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }


  addTeacher(){
    this.teacherModelObj.teacherName=this.teacherForm.value.teacherName;
    this.teacherModelObj.subject=this.teacherForm.value.subject;
    this.teacherModelObj.expInYears+=this.teacherForm.value.expInYears;
    this.teacherModelObj.gender=this.teacherForm.value.gender;
    this.teacherModelObj.email=this.teacherForm.value.email;
    this.teacherModelObj.teachingCategory=this.teacherForm.value.teachingCategory;
    this.api.postTeacher(this.teacherModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Teacher details added sucessfully");
      let ref = document.getElementById('cancel');
      ref?.click();
      this.teacherForm.reset();
      this.getAllTeacher();
    },
    err=>{
      let ref = document.getElementById('cancel')
      if(err.status==403){alert("Oops..!You are a USER, Only ADMIN can make changes here...")
      ref?.click();}
      else{
      alert("Something went wrong");}
    }
    )
  }




  onEdit(row:any){
    this.showAdd = false;
    this.showUpdate = true;
    this.teacherModelObj.teacherId=row.teacherId;
    this.teacherForm.controls['teacherName'].setValue(row.teacherName);
    this.teacherForm.controls['subject'].setValue(row.subject);
    this.teacherForm.controls['expInYears'].setValue(row.expInYears);
    this.teacherForm.controls['gender'].setValue(row.gender);
    this.teacherForm.controls['email'].setValue(row.email);
    this.teacherForm.controls['teachingCategory'].setValue(row.teachingCategory);
  }

  updateTeacher(){
    if (confirm("Are you sure you want to update this item?")) {
    this.teacherModelObj.teacherName=this.teacherForm.value.teacherName;
    this.teacherModelObj.subject=this.teacherForm.value.subject;
    this.teacherModelObj.expInYears=this.teacherForm.value.expInYears;
    this.teacherModelObj.gender=this.teacherForm.value.gender;
    this.teacherModelObj.email=this.teacherForm.value.email;
    this.teacherModelObj.teachingCategory=this.teacherForm.value.teachingCategory;
    this.api.editTeacher(this.teacherModelObj,this.teacherModelObj.teacherId)
    .subscribe(res=>{
      alert("updated Sucessfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.teacherForm.reset();
      this.getAllTeacher();
    },
    err=>{
      let ref = document.getElementById('cancel')
      if(err.status==403){alert("Oops..!You are a USER, Only ADMIN can make changes here...")
      ref?.click();}
      else{
      alert("Something went wrong");}
    })}
  }

  deleteTeacher(row:any){
    if (confirm("Are you sure you want to delete this item?")) {
    this.api.removeTeacher(row.teacherId).subscribe(res=>{
      alert("Teacher details deleted")
      this.getAllTeacher();
    },err=>{
      let ref = document.getElementById('cancel')
      if(err.status==403){alert("Oops..!You are a USER, Only ADMIN can make changes here...")
      ref?.click();}
      else{
      alert("Something went wrong");}
    })
  }}

  
}
