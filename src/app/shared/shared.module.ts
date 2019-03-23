import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule {}
