import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlatButtonComponent } from './flat-button/flat-button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';



@NgModule({
  declarations: [
    FlatButtonComponent,
    IconButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FlatButtonComponent
  ]
})
export class ButtonsModule { }
