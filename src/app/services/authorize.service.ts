import { inject, Injectable } from '@angular/core';
import { AuthService } from '../api/services';
import { map, Observable } from 'rxjs';
import { IssuedTokenResponse } from '../api/models';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  private readonly authApiService = inject(AuthService);

  signIn(email: string, password: string): Observable<IssuedTokenResponse> {
    const signInBody = { body: { email, password }};
    return this.authApiService.apiAuthSignInPost$Json(signInBody)
      .pipe(
        map(response => {
          localStorage.setItem('accessToken', response.accessToken);
          localStorage.setItem('refreshToken', response.refreshToken);
          return response;
        })
      );
  }

  getAccessTokenFromLocalStorage(): string {
    return localStorage.getItem('accessToken') as string;
  }
}
