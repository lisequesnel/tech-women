import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { SharedModule as UtilsModule} from 'primeng/primeng';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    DataViewModule,
    DropdownModule,
    PanelModule,
    ToolbarModule,
    UtilsModule,
  ],
  exports: [
    CommonModule,
    ButtonModule,
    CardModule,
    DataViewModule,
    DropdownModule,
    PanelModule,
    ToolbarModule,
    UtilsModule,
  ],
  declarations: []
})
export class SharedModule { }
