import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators}from '@angular/forms';
import { ServiceService } from '../shared/service.service';
import { TeacherModel } from '../teacher/teacher';
import { sectionModal } from './section';
import { Teacher } from './teach';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit{

  sectionData:any;
  sectionForm:FormGroup;
  sectionModelObj:sectionModal=new sectionModal();
  showUpdate!:boolean;
  teachData:any;

  constructor(private formbuilder: FormBuilder,private api : ServiceService,private router:Router) {
    this.sectionForm=this.createForm();
   }

   createForm():FormGroup{
      return this.formbuilder.group({

      })
   }

  ngOnInit(): void {
    
    this.sectionForm=this.formbuilder.group({
      sectionStrength: ['', Validators.required],
      sectionTeacher: ['', Validators.required],
    })
    this.getAllSections();
    this.getAllTeach();
  }

  getAllSections(){
    this.api.getSections().subscribe(res=>{
      this.sectionData =res;
      
    })
  }

  getAllTeach(){
    this.api.getTeachers().subscribe(res=>{
      this.teachData =res;
    },err=>{
      if(err.status==403){
        alert("Please login")
        this.router.navigate(['login'])
      }
    })
  }

  onEdit(row:any){
    this.sectionModelObj.sectionId=row.sectionId;
    this.sectionForm.controls['sectionStrength'].setValue(row.sectionStrength);
    this.sectionForm.controls['sectionTeacher'].setValue(row.sectionTeacher.teacherName);
  }

  editSection(){
    const jsonData=this.sectionForm.value.sectionTeacher
    const parsedData=JSON.parse(jsonData);
    console.log(parsedData, parsedData.teacherId,parsedData.teacherName);
  //   let temp={
  //     teacherId: this.sectionForm.value.sectionTeacher.teacherId,
  // teacherName: this.sectionForm.value.sectionTeacher.teacherName,
  // subject: this.sectionForm.value.sectionTeacher.subject,
  // expInYears:  this.sectionForm.value.sectionTeacher.expInYears,
  // gender: this.sectionForm.value.sectionTeacher.gender,
  // email:  this.sectionForm.value.sectionTeacher.email,
  // teachingCategory:  this.sectionForm.value.sectionTeacher.teachingCategory,
  //   }
    let temp=new Teacher(parsedData.teacherId,
      parsedData.teacherName,
      parsedData.subject,
      parsedData.expInYears,
      parsedData.gender,
      parsedData.email,
      parsedData.teachingCategory)

    // console.log(temp)
    this.sectionModelObj.sectionStrength=this.sectionForm.value.sectionStrength;
    // console.log(this.sectionModelObj.sectionTeacher)
    this.sectionModelObj.sectionTeacher={...temp};
    // console.log(this.sectionModelObj.sectionTeacher)
    this.api.updateSection(this.sectionModelObj,this.sectionModelObj.sectionId)
    .subscribe(res=>{
      alert("updated Sucessfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.sectionForm.reset();
      this.getAllSections();
    },
    err=>{
      let ref = document.getElementById('cancel')
      if(err.status==403){alert("Oops..!You are a USER, Only ADMIN can make changes here...")
      ref?.click();}
      else{
      alert("Something went wrong");}
    })
  }


}
