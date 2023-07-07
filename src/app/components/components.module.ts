import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { ButtonsModule } from './buttons/buttons.module';
import { InputsModule } from './inputs/inputs.module';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from './paginator/paginator.module';
import { FlexModule } from '@angular/flex-layout';
import { AppFormsModule } from './forms/app-forms.module';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonsModule,
    InputsModule,
    PaginatorModule,
    FlexModule,
    AppFormsModule
  ],
  exports: [
    TableComponent,
    ButtonsModule,
    InputsModule,
    PaginatorModule,
    FlexModule,
    AppFormsModule
  ]
})
export class ComponentsModule { }
