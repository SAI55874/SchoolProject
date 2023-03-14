import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators}from '@angular/forms';
import { ServiceService } from '../shared/service.service';
import { Section } from './sec';
import { StudentModel } from './student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{

  studentForm:FormGroup;
  studentData:any;
  studentModelObj:StudentModel=new StudentModel();
  showAdd!:boolean;
  showUpdate!:boolean;
  secData:any;
  secCatelog: Section[] = [];
  selectedSectionId: number=0;
  constructor(private formbuilder: FormBuilder,private api : ServiceService,private router: Router) {
    this.studentForm=this.createForm();
   }

  ngOnInit(): void {
    this.studentForm=this.formbuilder.group({
      
      studentName: ['', [Validators.required, Validators.maxLength(50)]],
      studentOfSection: ['', [Validators.required]],
      age: ['', [Validators.required]],
      marks: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    })
    this.getAllStudents();
    this.getAllSections();
  }

   createForm():FormGroup{
    return this.formbuilder.group({

    })
   }

   getAllSections(){
    this.api.getSections().subscribe(res=>{
      this.secData =res;
      
    },err=>{
      if(err.status==403){
        alert("Please login")
        this.router.navigate(['login'])
      }
    })
  }

   clickAddStudent(){
    this.studentForm.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

   getAllStudents(){
    this.api.getStudents().subscribe(res=>{
      this.studentData =res;
    })
  }

  addStudent(){
    const jsonData=this.studentForm.value.studentOfSection
    const parsedData=JSON.parse(jsonData);
    // console.log(parsedData)
    let temp=new Section(
      parsedData.sectionId,
      parsedData.sectionStrength,
      parsedData.sectionTeacher
    )


    this.studentModelObj.studentName=this.studentForm.value.studentName;
    this.studentModelObj.studentOfSection={...temp};
    this.studentModelObj.age=this.studentForm.value.age;
    this.studentModelObj.marks=this.studentForm.value.marks;
    this.studentModelObj.gender=this.studentForm.value.gender;
    this.studentModelObj.email=this.studentForm.value.email;
    this.api.postStudent(this.studentModelObj)
    .subscribe(res=>{
      // console.log(res);
      alert("Student details added sucessfully");
      let ref = document.getElementById('cancel');
      ref?.click();
      this.studentForm.reset();
      this.getAllStudents();
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
    this.studentModelObj.studentId=row.studentId;
    this.studentForm.controls['studentName'].setValue(row.studentName);
    this.studentForm.controls['studentOfSection'].setValue(row.studentOfSection);
    this.studentForm.controls['age'].setValue(row.age);
    this.studentForm.controls['marks'].setValue(row.marks);
    this.studentForm.controls['gender'].setValue(row.gender);
    this.studentForm.controls['email'].setValue(row.email);
  }

  updateStudent(){
    const jsonData=this.studentForm.value.studentOfSection
    const parsedData=JSON.parse(jsonData);
    // console.log(parsedData)
    let temp=new Section(
      parsedData.sectionId,
      parsedData.sectionStrength,
      parsedData.sectionTeacher
    )


    this.studentModelObj.studentName=this.studentForm.value.studentName;
    this.studentModelObj.studentOfSection={...temp};
    // console.log( this.studentModelObj.studentOfSection)
    this.studentModelObj.age=this.studentForm.value.age;
    this.studentModelObj.marks=this.studentForm.value.marks;
    this.studentModelObj.gender=this.studentForm.value.gender;
    this.studentModelObj.email=this.studentForm.value.email;
    
    this.api.editStudent(this.studentModelObj,this.studentModelObj.studentId)
    .subscribe(res=>{
      alert("updated Sucessfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.studentForm.reset();
      this.getAllStudents();
    },
    err=>{
      let ref = document.getElementById('cancel')
      if(err.status==403){alert("Oops..!You are a USER, Only ADMIN can make changes here...")
      ref?.click();}
      else{
      alert("Something went wrong");}
    })
  }

  deleteStudent(row:any){
    this.api.removeStudent(row.studentId).subscribe(res=>{
      alert("Student details deleted")
      this.getAllStudents();
    },err=>{
      let ref = document.getElementById('cancel')
      if(err.status==403){alert("Oops..!You are a USER, Only ADMIN can make changes here...")
      ref?.click();}
      else{
      alert("Something went wrong");}
    }
    )
  }

}
