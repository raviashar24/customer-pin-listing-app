import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinRoutingModule } from './pin-routing.module';
import { PinComponent } from './pin.component';

@NgModule({
	declarations: [PinComponent],
	imports: [CommonModule, PinRoutingModule],
	exports: [PinComponent],
})
export class PinModule {}
