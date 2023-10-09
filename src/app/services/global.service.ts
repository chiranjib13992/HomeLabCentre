import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private url = 'http://localhost:8080/image/stores';
  constructor(private http: HttpClient) {

   }
  private dataSubj = new BehaviorSubject<string | null>(null);
  docData$ = this.dataSubj.asObservable()
  
  sendData(data:any){
    this.dataSubj.next(data)
  }
  sendImage(data: FormData){
    return this.http.post('http://localhost:4000/postImage',data)
  }
  postPatientData(data: FormData){
    const httpOptions = {
      method: 'POST',
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*, *'
      })
    };
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json'
    // });
  return this.http.post(`${this.url}`, data,httpOptions)
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
