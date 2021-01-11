import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TemplateComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class TemplateModule { }
