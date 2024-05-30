import {Component, OnInit} from '@angular/core';
import {BasketService} from "../../basket/basket.service";
import {BasketItem} from "../../shared/models/basket";
import {AccountService} from "../../account/account.service";
import {User} from "../../shared/models/user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  currentUser$?: Observable<User | null>;

  constructor(public basketService: BasketService, public accountService: AccountService) {
  }

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
  }

  getItemsCount(items: BasketItem[]) {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }

  logout() {
    this.accountService.logout();
  }
}
