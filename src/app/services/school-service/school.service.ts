import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {School} from "../../interfaces/school";

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private apiUrl = `${environment.baseUrl}schools`;
  constructor(private http: HttpClient) { }
  getSchools(): Observable<School[]> {
    return this.http.get<School[]>(this.apiUrl);
  }

  addSchool(school: School): Observable<School> {
    return this.http.post<School>(this.apiUrl, school);
  }

  updateSchool(school: School): Observable<School> {
    const url = `${this.apiUrl}/${school.id}`;
    return this.http.put<School>(url, school);
  }

  deleteSchool(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
