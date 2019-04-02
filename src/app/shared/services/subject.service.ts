import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private subjectObject = {};

  public emitSubject(subjectName: string, value: any): void {
    this.createIfNotExist(subjectName);
    console.log(this.subjectObject[subjectName]);
    this.subjectObject[subjectName].next(value);
  }

  public getSubject(subjectName: string): any {
    this.createIfNotExist(subjectName);

    return this.subjectObject[subjectName];
  }

  private createIfNotExist(subjectName: string): void {
    if (!(subjectName in this.subjectObject)) {
      this.subjectObject[subjectName] = new Subject();
    }
  }

}
