import {CanActivateFn, Router} from '@angular/router';
import {AccountService} from "../../account/account.service";
import {inject} from "@angular/core";

export const canActivate: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService);
  const router = inject(Router);
  if (accountService.isAuthenticated()) {
    return true;
  } else {
    // Store the attempted URL for redirection
    accountService.redirectUrl = state.url;
    // Redirect to the Login page with the Redirect URL
    return router.createUrlTree(['/account/login'],{
      queryParams: {returnUrl: state.url}
    })
  }
};
