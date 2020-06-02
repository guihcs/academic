import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivateAccountRoutingModule } from './activate-account-routing.module';
import { PasswordCreatorComponent } from './components/password-creator/password-creator.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [PasswordCreatorComponent],
    imports: [
        CommonModule,
        ActivateAccountRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class ActivateAccountModule { }
