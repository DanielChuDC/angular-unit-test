import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnotherLayoutRoutingModule } from './another-layout-routing.module';
import { LayoutListComponent } from './layout-list/layout-list.component';

@NgModule({
  declarations: [LayoutListComponent],
  imports: [
    CommonModule,
    AnotherLayoutRoutingModule
  ]
})
export class AnotherLayoutModule { }
