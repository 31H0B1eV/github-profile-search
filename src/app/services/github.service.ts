import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

@Injectable()
export class GithubService {

  private username: string;

  constructor(private _http: Http) {
    this.username = 'octocat';
  }

  getUser() {
    return this._http.get(`http://api.github.com/users/${this.username}`)
      .map(res => res.json());
  }

  getRepos() {
    return this._http.get(`http://api.github.com/users/${this.username}/repos`)
      .map(res => res.json());
  }

}
