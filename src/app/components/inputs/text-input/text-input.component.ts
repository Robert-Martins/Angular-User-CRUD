import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent {

  @Input()
  label!: string;

  @Input()
  type: 'text' | 'password' | 'number' = 'text';

  @Input()
  disabled: boolean = false;

  @Input()
  placeholder?: string;

  @Input()
  control!: FormControl;

  @Output()
  onChangeValue: EventEmitter<any> = new EventEmitter();

  constructor() { }

  public get isValid(): boolean {
    return this.control.valid;
  }

  public get isRequired(): boolean {
    return this.control.validator === Validators.required;
  }

  public event(): void {
    this.onChangeValue?.emit();
  }

}
