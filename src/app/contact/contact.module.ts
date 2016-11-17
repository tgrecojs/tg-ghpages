import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import contactRoutes from './contact.routes';


@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule, contactRoutes
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
