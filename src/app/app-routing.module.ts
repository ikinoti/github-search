import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubFormComponent } from './components/github-form/github-form.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { GithubReposComponent } from './components/github-repos/github-repos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: 'search', component: GithubFormComponent },
  { path: 'profile', component: GithubProfileComponent },
  { path: 'repos', component: GithubReposComponent },
  { path: '**', component: NotFoundComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
