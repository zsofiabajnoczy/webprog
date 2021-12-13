import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent implements OnInit {

  @Input() chosenImage = '';
  @Output() clickCloseButton = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal = () => {
    this.clickCloseButton.emit();
  }

}
