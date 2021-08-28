import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { profile } from 'console';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
// import { environment } from '../../environments/environment';
// import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GithubSearchService {
  constructor(private httpClient: HttpClient) {}

  // PROFILE
  public getProfile(searchQuery: any): Observable<any> {
    let profileURL = `https://api.github.com/users/${searchQuery}?access_token=${environment.myKey}`;
    return this.httpClient
      .get<any>(profileURL)
      .pipe(retry(1), catchError(this.errorHandler));
  }

  public errorHandler(error: HttpErrorResponse) {
    let errMessage: string;
    if (error.error instanceof ErrorEvent) {
      errMessage = `MESSAGE:${error.error.message}`;
    } else {
      errMessage = `STATUS:${error.status} MESSAGE:${error.message}`;
    }
    return throwError(errMessage);
  }
}
