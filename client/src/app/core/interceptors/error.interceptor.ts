import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {catchError, Observable} from 'rxjs';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router, private toastrService: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(err => {
        if (err.status === 404) {
          this.toastrService.error('404 error happened');
          this.router.navigate(['/not-found']);
        } else if (err.status === 500) {
          this.toastrService.error('500 error happened');
          this.router.navigate(['/server-error']);
        }
        // passing the error along to the next error handling middleware
        throw err;
      })
    );
  }
}
