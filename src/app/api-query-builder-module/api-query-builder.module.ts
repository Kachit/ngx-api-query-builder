import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueryBuilderProvider } from './query-builder.provider';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  providers: [
    QueryBuilderProvider,
  ]
})
export class ApiQueryBuilderModule { }
