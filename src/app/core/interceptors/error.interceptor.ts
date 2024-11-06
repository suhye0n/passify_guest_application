import { HttpInterceptorFn } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const handleErrorInterceptor: HttpInterceptorFn = (request, next) => {
  return next(request).pipe(
    catchError((errorResponse) => {
      return throwError(
        () => errorResponse?.error || 'An unknown error occurred'
      );
    })
  );
};
