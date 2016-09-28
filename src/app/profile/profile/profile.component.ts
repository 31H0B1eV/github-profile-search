import { Component } from '@angular/core';
import { GithubService } from "../../services/github.service";
import "rxjs/add/operator/map";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent {
  user = [];
  repos = [];

  constructor(private _githubService: GithubService) {
    this._githubService.getUser().subscribe(
      user => {
        this.user = user;
      }
    );

    this._githubService.getRepos().subscribe(
      repos => {
        this.repos = repos;
      }
    );
  }

  // TODO change type from any and add more check
  searchUser(form: any) {
    if(form.hasOwnProperty("username")) {
      try {
        this._githubService.getUser(form.username).subscribe(
          user => {
            this.user = user;
          }
        );
      } catch (e) {
        // console.error(e);
      }
    }

    this._githubService.getRepos(form.username).subscribe(
      repos => {
        this.repos = repos;
      }
    );
  }

}
