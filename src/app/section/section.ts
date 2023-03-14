import { TeacherModel } from "../teacher/teacher";
export class sectionModal{
    sectionId:number=0;
    sectionStrength:number=0;
    sectionTeacher:TeacherModel={
        teacherId:0,
        teacherName:'',
        subject:'',
        expInYears:0,
        gender:'',
        email:'',
        teachingCategory:''
    }
}