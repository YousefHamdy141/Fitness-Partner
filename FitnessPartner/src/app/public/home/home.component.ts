import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  Router,
  Event,
  RouterLink,
  RouterModule,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';
import { LoadingSpinnerComponent } from '../../shared/loading-spinner/loading-spinner.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  imports: [RouterModule, RouterLink, CommonModule, LoadingSpinnerComponent,TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isLoading = false;

  constructor(private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.isLoading = false;
      }
    });
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
