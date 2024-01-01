import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User, UserWithCardDto } from "../models/user";

@Injectable({providedIn:  "root"})
export class UserService {
  constructor(private httpClient:HttpClient) {}

  getAll():Observable<User[]> {
    return this.httpClient.get<User[]>("http://localhost:3000/users");
  }
  getById(id:number){
    return this.httpClient.get<User[]>("http://localhost:3000/users?="+id);
  }
  getWithCardById(id:number):Observable<UserWithCardDto>{
    return this.httpClient.get<UserWithCardDto>("http://localhost:3000/users/"+id+"?_embed=cards");
  }
}
