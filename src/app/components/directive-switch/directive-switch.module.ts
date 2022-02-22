import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectiveSwitchRoutingModule } from './directive-switch-routing.module';
import { DirectiveSwitchComponent } from './directive-switch.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [DirectiveSwitchComponent],
  imports: [CommonModule, DirectiveSwitchRoutingModule, NgbNavModule],
})
export class DirectiveSwitchModule {}
