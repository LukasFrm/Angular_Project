import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent }  from './customers.component';
import {FilterTextboxComponent} from "./customers-list/filter-textbox.component"
import { CustomersListComponent } from './customers-list/customers-list.component';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ CustomersComponent, CustomersListComponent, FilterTextboxComponent ],
  exports: [CustomersComponent]
})
export class CustomersModule { }