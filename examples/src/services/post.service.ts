import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { ResponseType } from '../models/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<ResponseType<Post[]>>{
    return this.httpClient.get<ResponseType<Post[]>>("https://dummyjson.com/posts")
  };
}
