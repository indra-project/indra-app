import { NgModule } from '@angular/core';
import { ByTypePipe } from './by-type/by-type';
import { FilterPipe } from './filter/filter';

@NgModule({
	declarations: [
		ByTypePipe,
		FilterPipe],
	imports: [],
	exports: [
		ByTypePipe,
		FilterPipe]
})
export class PipesModule { }
