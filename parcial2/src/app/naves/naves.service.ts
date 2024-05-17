import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Naves } from './Naves';

import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NavesService {
  private apiUrl = environment.baseUrl; 

  constructor(private http: HttpClient) { }

  getNaves(): Observable<Naves[]> {
    return this.http.get<Naves[]>(this.apiUrl);
  }

  

}
