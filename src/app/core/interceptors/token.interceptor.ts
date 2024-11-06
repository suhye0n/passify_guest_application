import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { JwtService } from '../auth/services/jwt.service';

export const authTokenInterceptor: HttpInterceptorFn = (request, next) => {
  const jwt = inject(JwtService).getToken();

  const modifiedRequest = request.clone({
    setHeaders: jwt ? { Authorization: `Bearer ${jwt}` } : {},
  });

  return next(modifiedRequest);
};
