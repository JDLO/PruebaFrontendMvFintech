import { NgModule } from '@angular/core';
import { SearchDishesPipe } from './search-dishes.pipe';
import { FilterDishPipe } from './filter-dish.pipe';

@NgModule({
    declarations: [
        SearchDishesPipe,
        FilterDishPipe
    ],
    exports: [
        SearchDishesPipe,
        FilterDishPipe
    ],
})
export class PipesModule { }
