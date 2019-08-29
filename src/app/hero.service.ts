import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class HeroService {

  constructor(private http:HttpClient) {};
  getdata(){
    return this.http.get("http://localhost:3000/data");
  }
}
