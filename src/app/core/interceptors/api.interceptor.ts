import { HttpInterceptorFn } from '@angular/common/http';

export const apiInterceptor: HttpInterceptorFn = (request, next) => {
  const modifiedRequest = request.clone({
    url: `https://port-0-pointify-server-manager-m3833mtrd38e546a.sel4.cloudtype.app${request.url}`,
  });

  return next(modifiedRequest);
};
