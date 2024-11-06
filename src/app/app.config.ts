import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { JwtService } from './core/auth/services/jwt.service';
import { UserService } from './core/auth/services/user.service';
import { apiInterceptor } from './core/interceptors/api.interceptor';
import { authTokenInterceptor } from './core/interceptors/token.interceptor';
import { handleErrorInterceptor } from './core/interceptors/error.interceptor';
import { EMPTY } from 'rxjs';

export function initAuth(jwtService: JwtService, userService: UserService) {
  return () => (jwtService.getToken() ? userService.getCurrentUser() : EMPTY);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        apiInterceptor,
        authTokenInterceptor,
        handleErrorInterceptor,
      ])
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: initAuth,
      deps: [JwtService, UserService],
      multi: true,
    },
  ],
};
