import { Pipe, PipeTransform } from '@angular/core';
import { StudentModel } from '../student/student';
@Pipe({
  name: 'studentsFilter'
})
export class StudentsFilterPipe implements PipeTransform {

  transform(students: StudentModel[], sectionId: number): any {
    // console.log(sectionId,students)
    if (!students || !sectionId) {
      return students;
    }
    // console.log(students);
    
    // let stds=students.filter(student => student.studentOfSection.sectionId == sectionId);
    // console.log(stds)
    return students.filter(student => student.studentOfSection.sectionId == sectionId);
  }
}
