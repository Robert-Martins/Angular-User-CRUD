import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {

  @Input()
  label!: string;

  @Input()
  icon!: 'edit' | 'eye' | 'trash';

  @Output()
  onClick: EventEmitter<null> = new EventEmitter();

  constructor() { }

  public get iconUrl(): string {
    return `../../../../assets/icons/${this.icon}.png`;
  }

  public event(): void {
    this.onClick.emit();
  }

}
