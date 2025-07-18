import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  @Input() text?: string;
  @Input() color?: string;
  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }

}
