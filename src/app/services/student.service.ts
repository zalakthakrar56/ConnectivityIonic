import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Student {
  id: string;
  fullname: string;
  email: string;
  password: string;
  mobile: string;
}
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) { }
  create(student: Student) {
    return this.http.post("http://localhost:8100/msc3/api_insert.php", student);
  }
  getAll() {
    return this.http.get<[Student]>("http://localhost:8100/msc3/api_select.php");
  }
  update(student: Student, id: string) {
    return this.http.post("http://localhost:8100/msc3/api_update.php?id=" + id, student);
  }
  remove(id: string) {
    console.log(id);
    return this.http.get("http://localhost:8100/msc3/api_delete.php?id=" + id);
  }
}
