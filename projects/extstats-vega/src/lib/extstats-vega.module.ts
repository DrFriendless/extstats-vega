import { NgModule } from '@angular/core';
import { ExtstatsVegaComponent } from './extstats-vega.component';
import {ChartPaneComponent} from "./chart-pane/chart-pane.component";
import {ChartDirective} from "./chart.directive";

@NgModule({
    imports: [
    ],
    declarations: [
        ExtstatsVegaComponent,
        ChartDirective,
        ChartPaneComponent
    ],
    exports: [
        ChartDirective,
        ChartPaneComponent
    ]
})
export class ExtstatsVegaModule { }
