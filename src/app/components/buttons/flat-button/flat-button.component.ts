import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-flat-button',
  templateUrl: './flat-button.component.html',
  styleUrls: ['./flat-button.component.scss']
})
export class FlatButtonComponent {

  @Input()
  label!: string;

  @Output()
  onClick: EventEmitter<null> = new EventEmitter();

  constructor() { }

  public event(): void {
    this.onClick.emit();
  }

}
