import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ipresponse } from './ipresponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor( private http: HttpClient) { }
  private apiKey = 'at_3B4gbGhebys4vFqVh8yQleMGFT2t5';
  private apiUrl = 'https://geo.ipify.org/api/v2/country,city';

  getIpDetails(ip: string): Observable<Ipresponse>{
    return this.http.get<Ipresponse>(`${this.apiUrl}?apiKey=${this.apiKey}&ipAddress=${ip}`)
  }
}
// https://geo.ipify.org/api/v2/country,city?apiKey=at_3B4gbGhebys4vFqVh8yQleMGFT2t5&ipAddress=
