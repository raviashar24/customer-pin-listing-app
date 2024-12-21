import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'pin', pathMatch: 'full' },
	{
		path: 'pin',
		loadChildren: () =>
			import('./features/pin/pin.module').then(m => m.PinModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
