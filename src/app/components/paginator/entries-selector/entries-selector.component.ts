import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-entries-selector',
  templateUrl: './entries-selector.component.html',
  styleUrls: ['./entries-selector.component.scss']
})
export class EntriesSelectorComponent {

  @Input()
  entryControl!: FormControl;

  @Input()
  possibleEntries!: number[];

  @Output()
  onChangeValue: EventEmitter<any> = new EventEmitter();

  constructor() { }

  public event(): void {
    this.onChangeValue?.emit();
  }

}
