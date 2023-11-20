import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'selector-page',
  templateUrl: './selector-page.component.html',
  styles: [

  ]
})

export class SelectorPageComponent {

  public myForm: FormGroup = this.fb.group({
    region: ['', Validators.required ],
    country: ['', Validators.required ],
    borders: ['', Validators.required ],

  });

  constructor(
    private fb: FormBuilder,
  ) {}
}
