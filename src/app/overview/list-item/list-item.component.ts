import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hotel } from '../../models';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css',
})
export class ListItemComponent {
  @Input({ required: true }) hotel!: Hotel;
  @Output() delete = new EventEmitter<string>();

  onDeleteClick() {
    this.delete.emit(this.hotel.id);
  }
}
