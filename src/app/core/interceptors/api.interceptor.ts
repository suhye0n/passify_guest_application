import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { UserService } from '../auth/services/user.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const apiInterceptor: HttpInterceptorFn = (request, next) => {
  const userService = inject(UserService);
  const modifiedRequest = request.clone({
    url: `https://port-0-passify-server-manager-m3833mtrd38e546a.sel4.cloudtype.app${request.url}`,
  });

  return next(modifiedRequest).pipe(
    catchError((error: HttpErrorResponse) => {
      console.log(error);
      if (
        error.status === 401 ||
        error.message.includes('Wrong authentication token') ||
        error.message.includes('Authentication token missing')
      ) {
        userService.logout();
      }

      return throwError(() => error);
    })
  );
};
