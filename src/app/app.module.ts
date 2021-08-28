import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { GithubFormComponent } from './components/github-form/github-form.component';
import { GithubReposComponent } from './components/github-repos/github-repos.component';

@NgModule({
  declarations: [AppComponent, GithubProfileComponent, GithubFormComponent, GithubReposComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
