import { Component } from '@angular/core';
import { OtpService } from './services/otp.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lyffix';

  //api call data
  // category: any=[];
  // isloading: boolean = true;
  // constructor(private otpData: OtpService)
  // {
  //   otpData.category().subscribe((data:any) => {
  //     console.warn("data",data);
  //     this.category = data['data']['data'];
  //     this.isloading = false;
  //   });
  //   console.warn(this.category)
    
  // }

  //End of data
}
