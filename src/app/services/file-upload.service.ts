import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = "http://localhost:8080/api/belege/upload";


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

 
  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    console.log('FileUploadService - File:' + file.name);
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${baseUrl}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

}
