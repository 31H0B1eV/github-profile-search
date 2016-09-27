import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

@Injectable()
export class GithubService {

  private username: string;

  constructor(private http: Http) {
    this.username = 'johnsmith';
  }

}
