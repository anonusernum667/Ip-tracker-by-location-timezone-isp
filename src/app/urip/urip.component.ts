import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Urip } from '../urip';
import { Ipresponse } from '../ipresponse';
import { tick } from '@angular/core/testing';
import { ApiCallService } from '../api-call.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-urip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './urip.component.html',
  styleUrl: './urip.component.scss'
})
export class UripComponent {
  private apiUrl = 'https://api.ipify.org/?format=json';
  secip = ''
  ip:Urip | undefined
  ipinfo: Ipresponse | undefined
  constructor(private http: HttpClient,private apiservice: ApiCallService){}
  getip():Observable<Urip>{
    return this.http.get<Urip>(this.apiUrl)

  }

  ngOnInit():void{
    this.getip().subscribe({
      next: (response: Urip) => {
        this.ip = response
        this.secip = response.ip
      },
      error: (error: Error) => {
        console.log('fucking error')
      }
    }),
    this.apiservice.getIpDetails(this.secip).subscribe({
      next: (response: Ipresponse) => {
        this.ipinfo = response
      },
      error: (error: Error)=>{
        console.log('error in the second function in this component')
      }
    })

  }
}
