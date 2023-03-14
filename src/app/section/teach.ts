export class Teacher {
    teacherId: number;
    teacherName: string;
    subject: string;
    expInYears: number;
    gender: string;
    email: string;
    teachingCategory: string;
  
    constructor(teacherId: number, teacherName: string, subject: string, expInYears: number, gender: string, email: string, teachingCategory: string) {
      this.teacherId = teacherId;
      this.teacherName = teacherName;
      this.subject = subject;
      this.expInYears = expInYears;
      this.gender = gender;
      this.email = email;
      this.teachingCategory = teachingCategory;
    }
  }