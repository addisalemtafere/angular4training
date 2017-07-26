/**
 * Created by addis on 7/20/17.
 */
import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  templateUrl: 'header.component.html',
  selector: 'app-header'
})
export class HeaderComponent {

@Output()  featureSelected = new EventEmitter<string>();

  constructor() {

  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
