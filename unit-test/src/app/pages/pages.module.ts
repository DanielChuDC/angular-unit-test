import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { CommonMaterialModule } from '../common-material/common-material.module';
import { CreditCardComponent } from './credit-card/credit-card.component';
@NgModule({
  declarations: [WelcomeComponent, CreditCardComponent],
  imports: [CommonModule, PagesRoutingModule, CommonMaterialModule]
})
export class PagesModule {}
