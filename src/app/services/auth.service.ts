import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeLogin, typeLoginReponse } from '../types/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {

  }
  login(data:TypeLogin):Observable<typeLoginReponse>{
    return this.http.post<typeLoginReponse>(`${environment.login}`,data)
  }
}
