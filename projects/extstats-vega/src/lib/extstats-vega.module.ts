import { NgModule } from '@angular/core';
import { ChartPaneComponent } from "./chart-pane/chart-pane.component";
import { ChartDirective } from "./chart.directive";

@NgModule({
    imports: [
    ],
    declarations: [
        ChartDirective,
        ChartPaneComponent
    ],
    exports: [
        ChartDirective,
        ChartPaneComponent
    ]
})
export class ExtstatsVegaModule { }
