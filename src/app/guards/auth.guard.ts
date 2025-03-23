import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthorizeService } from '../services/authorize.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthorizeService);
  const router = inject(Router);

  const accessToken = authService.getAccessTokenFromLocalStorage();

  if (state.url === '/auth') {
    if (accessToken) {
       router.navigate(['/main']);
       return false;
    }
  }

  if (state.url === '/main') {
    if (!accessToken) {
      router.navigate(['/auth']);
      return false;
    }
  }

  return true;
};
