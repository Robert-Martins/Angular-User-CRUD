import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntriesComponent } from './entries/entries.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { EntriesSelectorComponent } from './entries-selector/entries-selector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EntriesComponent,
    PaginatorComponent,
    EntriesSelectorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    EntriesComponent,
    EntriesSelectorComponent,
    PaginatorComponent
  ]
})
export class PaginatorModule { }
