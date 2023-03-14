import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TeacherModel } from '../teacher/teacher';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private teacherURL="http://localhost:8080/api/v1/teachers";
  private sectionURL="http://localhost:8080/api/v1/Sections";
  private studentURL="http://localhost:8080/api/v1/students";
  private userURL="http://localhost:8080/api/v1/newUser";
  private loginURL="http://localhost:8080/api/v1/authenticate";
  constructor(private http : HttpClient) { }



// public generateToken(request:any){
//   return this.http.post(this.loginURL,request,{responseType: 'text' as 'json'});
// }


loginUser(data:any):Observable<any>{
  return this.http.post<any>(this.loginURL,data,{responseType: 'text' as 'json'})
}

// loginUser(data:any){
//   return this.http.post<any>(this.loginURL,data).pipe(map((res:any)=>{
//     return res;
//   }))
// }

getTeachers(): Observable<TeacherModel[]>{
  let tokenStr = 'Bearer '+localStorage.getItem('token');
  // console.log(tokenStr)
  const headers=new HttpHeaders().set("Authorization",tokenStr)
  return this.http.get<TeacherModel[]>(`${this.teacherURL}`,{headers});
}




getSections(){
  let tokenStr = 'Bearer '+localStorage.getItem('token');
  const headers=new HttpHeaders().set("Authorization",tokenStr)
  return this.http.get<any>(this.sectionURL,{headers})
  .pipe(map((res:any)=>{
    return res;
  }))
}

  addUser(data:any){
    return this.http.post<any>(this.userURL, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  

  // getTeachers(): Observable<TeacherModel[]>{
  //   return this.http.get<TeacherModel[]>(`${this.teacherURL}`);
  // }

  postTeacher(data:any){
    let tokenStr = 'Bearer '+localStorage.getItem('token');
    const headers=new HttpHeaders().set("Authorization",tokenStr)
    return this.http.post<any>(this.teacherURL, data,{headers})
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  editTeacher( data:any,id:number){
    let tokenStr = 'Bearer '+localStorage.getItem('token');
    const headers=new HttpHeaders().set("Authorization",tokenStr)
    return this.http.put<any>(this.teacherURL+"/"+id,data,{headers})
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  removeTeacher( id:number){
    let tokenStr = 'Bearer '+localStorage.getItem('token');
    const headers=new HttpHeaders().set("Authorization",tokenStr)
    return this.http.delete<any>(this.teacherURL+"/"+id,{headers})
    .pipe(map((res:any)=>{
      return res;
    }))
  }


  // getSections(){
  //     return this.http.get<any>(this.sectionURL)
  //     .pipe(map((res:any)=>{
  //       return res;
  //     }))
  //   }

    updateSection(data:any,id:number){
      let tokenStr = 'Bearer '+localStorage.getItem('token');
      const headers=new HttpHeaders().set("Authorization",tokenStr)
      return this.http.put<any>(this.sectionURL+"/"+id,data,{headers})
    .pipe(map((res:any)=>{
      return res;
    }))
    }

    getStudents(){
      let tokenStr = 'Bearer '+localStorage.getItem('token');
      const headers=new HttpHeaders().set("Authorization",tokenStr)
      return this.http.get<any>(this.studentURL,{headers})
      .pipe(map((res:any)=>{
        return res;
      }))
    }

    postStudent(data:any){
      let tokenStr = 'Bearer '+localStorage.getItem('token');
      const headers=new HttpHeaders().set("Authorization",tokenStr)
      return this.http.post<any>(this.studentURL, data,{headers})
      .pipe(map((res:any)=>{
        return res;
      }))
    }

    editStudent( data:any,id:number){
      let tokenStr = 'Bearer '+localStorage.getItem('token');
      const headers=new HttpHeaders().set("Authorization",tokenStr)
      return this.http.put<any>(this.studentURL+"/"+id,data,{headers})
      .pipe(map((res:any)=>{
        return res;
      }))
    }

    removeStudent( id:number){
      let tokenStr = 'Bearer '+localStorage.getItem('token');
      const headers=new HttpHeaders().set("Authorization",tokenStr)
      return this.http.delete<any>(this.studentURL+"/"+id,{headers})
      .pipe(map((res:any)=>{
        return res;
      }))
    }

}
