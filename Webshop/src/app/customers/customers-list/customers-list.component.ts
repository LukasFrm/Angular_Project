import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import {ICustomer} from '../../shared/interfaces'

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {
    private_customers: ICustomer[] = [];
    @Input() get customers() : ICustomer[] {
        return this._customers;
    }

    set customers(value: ICustomer[]) {
        if (value) {
            this.filteredCustomers = this._customers = value;
            this.calculateOrders();
        }
    }

    filteredCustomers: any[] = [];
    customersOrderTotal: number;
    currencyCode: string = 'EUR';
    
    constructor() {}
    
    ngOnInit() {

    }

 
    calculateOrders() {
        this.customersOrderTotal = 0;
        this.filteredCustomers.forEach((cust:ICustomer) => {
            this.customersOrderTotal += cust.orderTotal;
        }
        )
    }
    sort(prop:string){

    }
}