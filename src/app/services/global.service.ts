import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private url = 'http://localhost:8080/patient/created';
  constructor(private http: HttpClient) {

   }
  private dataSubj = new BehaviorSubject<string | null>(null);
  docData$ = this.dataSubj.asObservable()
  
  sendData(data:any){
    this.dataSubj.next(data)
  }
  sendImage(data: FormData){
    return this.http.post('http://localhost:8080/patient/upload/prescription/10',data)
  }
  postPatientData(data: FormData){
    const httpOptions = {
      method: 'POST',
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json'
    // });
  return this.http.post(`${this.url}`, data)
  }
  getUser(userId: string) {
    return this.http.get(`${this.url}/getData/${userId}`);
  }
  downloadPres(username: string){
   return this.http.get(`${this.url}/getData/${username}`,{
    responseType:'blob'
   })
  }
 
}
