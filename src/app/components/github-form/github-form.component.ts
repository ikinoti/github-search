import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { GithubSearchService } from 'src/app/services/github-search.service';

@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css'],
})
export class GithubFormComponent implements OnInit {
  public userQuery: any;
  public githubProfile: any;
  public githubRepos: any;
  public errMessage: any;

  constructor(private githubSearchService: GithubSearchService) {}

  public userSearch() {
    // get profile
    this.githubSearchService.getProfile(this.userQuery).subscribe(
      (data) => {
        this.githubProfile = data;
      },
      (error) => {
        this.errMessage = error;
      }
    );
  }

  ngOnInit(): void {}
}
