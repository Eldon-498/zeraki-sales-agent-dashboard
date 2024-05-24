import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Collection} from "../../interfaces/collection";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {
  private apiUrl = `${environment.baseUrl}collections`;
  constructor(private http: HttpClient) { }

  getCollections(): Observable<Collection[]> {
    return this.http.get<Collection[]>(this.apiUrl);
  }

  addCollection(collection: Collection): Observable<Collection> {
    return this.http.post<Collection>(this.apiUrl, collection);
  }

  updateCollection(collection: Collection): Observable<Collection> {
    const url = `${this.apiUrl}/${collection.id}`;
    return this.http.put<Collection>(url, collection);
  }

  deleteCollection(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
