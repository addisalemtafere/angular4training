import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from "@angular/core";
import {Ingredient} from '../../Shared/ingredient.model';

@Component({
  selector: 'app-shoppin-edit',
  templateUrl: './shoppin-edit.component.html',
  styleUrls: ['./shoppin-edit.component.css']
})
export class ShoppinEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() newIngredientAdded = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.newIngredientAdded.emit(newIngredient);

  }
}
