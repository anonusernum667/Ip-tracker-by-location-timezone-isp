import { Component } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { Ipresponse } from '../ipresponse';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  ipAddress: string = '';
  ipDetails: Ipresponse | null = null;
  validationError: string = '';

  constructor(private geoIpService: ApiCallService) {}

  validateip(ip: string){
    const ipRegex = /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])$/;
    return ipRegex.test(ip);

  }
  lookupIp(){
    if (this.validateip(this.ipAddress)){this.validationError = ''; // Clear any previous error
      this.geoIpService.getIpDetails(this.ipAddress).subscribe(
        (response) => {
          this.ipDetails = response;
          console.log(this.ipDetails); // Handle the response
        },
        (error) => {
          console.error('Error fetching IP details', error);
        }
      );
    } else {
      this.validationError = 'Please enter a valid IP address.';
    }
  }

}


