import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthorizeService } from '../services/authorize.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authorizeService = inject(AuthorizeService);
  const accessToken = authorizeService.getAccessTokenFromLocalStorage();

  if (accessToken)
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`
      }
    });

  return next(req);
};
