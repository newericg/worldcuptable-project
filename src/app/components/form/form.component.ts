import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { InputComponent } from '../input/input.component';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule, MatButtonModule, MatIconModule, ReactiveFormsModule, InputComponent, MatInputModule, ButtonComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  @Input() value: string | undefined = ''
  @Output() addTeam: EventEmitter<any> = new EventEmitter();
  @Output() clearList: EventEmitter<any> = new EventEmitter();

  formControl = new FormControl('', [Validators.required]);

  onSubmit() {
    this.value = this.formControl.value?.toString()
    this.addTeam.emit(this.value)
    this.formControl.reset()
  }

  onReset() {
    this.clearList.emit()
  }
}
