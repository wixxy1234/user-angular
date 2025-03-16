import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isAuth = authService.isAuthenticated();

  if (state.url === '/auth') {
    if (isAuth) {
       router.navigate(['/main']);
       return false;
    }
  }

  if (state.url === '/main') {
    if (!isAuth) {
      router.navigate(['/auth']);
      return false;
    }
  }

  return true;
};
