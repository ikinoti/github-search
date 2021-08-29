import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { GithubReposComponent } from './components/github-repos/github-repos.component';

const routes: Routes = [
  { path: 'profile', component: GithubProfileComponent },
  { path: 'repos', component: GithubReposComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
