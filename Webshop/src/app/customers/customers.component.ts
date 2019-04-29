import {Component, OnInit} from '@angular/core'

@Component({
    selector:'app-customers',
    templateUrl:'./customers.component.html'
})

export class CustomersComponent implements OnInit {
    title:string;
    people:any[];
    isVisible = true;

    constructor() {}

    ngOnInit() {
        this.title = "Customers";
        this.people = [
            { id: 1, name: 'Lucas Sykes', city: 'TASTON', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
            { id: 2, name: 'paige Robinson', city: 'PHILHAM', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
            { id: 3, name: 'jamie Stephens', city: 'MILLBURN', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
            { id: 4, name: 'Nicholas Daly', city: 'DUBLIN', orderTotal: 599.99, customerSince: new Date(2002, 10, 31)},
        ];
    }
}