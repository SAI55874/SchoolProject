import { Teacher } from "../section/teach";

export class Section {
    sectionId: number;
    sectionStrength: number;
    sectionTeacher: Teacher;

    constructor(sectionId: number, sectionStrength: number, sectionTeacher: Teacher) {
        this.sectionId = sectionId;
        this.sectionStrength = sectionStrength;
        this.sectionTeacher = sectionTeacher;
      }
  }