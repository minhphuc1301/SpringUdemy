import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class MessageBean {
  constructor(public message: string) {
  }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor(private httpClient: HttpClient) {

  }

  getData(): Observable<MessageBean> {
    return this.httpClient.get<MessageBean>('http://localhost:8080/welcome')
  }
  getDataWithParam(data: string) {
    return this.httpClient.get<MessageBean>(`http://localhost:8080/welcome/${data}`)
  }
}
