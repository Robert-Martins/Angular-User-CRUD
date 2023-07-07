import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { ButtonsModule } from '../buttons/buttons.module';
import { InputsModule } from '../inputs/inputs.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    UserFormComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    InputsModule,
    ReactiveFormsModule,
    FormsModule,
    FlexModule
  ],
  exports: [
    UserFormComponent
  ]
})
export class AppFormsModule { }
