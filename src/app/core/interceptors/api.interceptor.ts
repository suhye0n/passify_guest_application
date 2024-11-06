import { HttpInterceptorFn } from '@angular/common/http';

export const apiInterceptor: HttpInterceptorFn = (request, next) => {
  const modifiedRequest = request.clone({
    url: `http://localhost:3000${request.url}`,
  });

  return next(modifiedRequest);
};
