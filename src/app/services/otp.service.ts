import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class OtpService {
url = "http://api.lyffix.com/api/system/getCategory"
  constructor(public http: HttpClient) { }
  category() {
    return this.http.get(this.url)
  }
}
