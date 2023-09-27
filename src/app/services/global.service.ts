import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private url = 'http://localhost:4000';
  constructor(private http: HttpClient) { }
  private dataSubj = new BehaviorSubject<string | null>(null);
  docData$ = this.dataSubj.asObservable()
  
  sendData(data:any){
    this.dataSubj.next(data)
  }
  postPatientData(data: FormData){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' 
    });
  return this.http.post(`${this.url}/createUser`, data)
  }
  getUser(userId: string) {
    return this.http.get(`${this.url}/getData/${userId}`);
  }
 
}
