import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AddUpdatePartRequest, GetPartResponse } from '../models/Part';
import { map, filter, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PartsService {
  constructor(private http: HttpClient) {}

  getParts() {
    return this.http.get<GetPartResponse[]>(environment.apiUrl);
  }
  getPart(partId: number) {
    return this.http.get(`${environment.apiUrl}/form-data/${partId}`);
  }
  getFormData() {
    return this.http.get(`${environment.apiUrl}/form-data`);
  }
  addPart(model: AddUpdatePartRequest) {
    return this.http.post(environment.apiUrl, model);
  }
  updatePart(model: AddUpdatePartRequest) {
    return this.http.put(environment.apiUrl, model);
  }
  removePart(id: number) {
    return this.http.delete(`${environment.apiUrl}/${id}`);
  }
}
