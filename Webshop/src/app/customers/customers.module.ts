import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule }      from '@angular/forms';
import { CustomersComponent }  from './customers.component';
import {FilterTextboxComponent} from "./customers-list/filter-textbox.component"
import { CustomersListComponent } from './customers-list/customers-list.component';

@NgModule({
  imports:      [ CommonModule, SharedModule, FormsModule ],
  declarations: [ CustomersComponent, CustomersListComponent, FilterTextboxComponent ],
  exports: [CustomersComponent]
})
export class CustomersModule { }