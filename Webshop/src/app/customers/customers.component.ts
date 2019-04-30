import {Component, OnInit} from '@angular/core'
import { DataService } from "../core/data.service"

@Component({
    selector:'app-customers',
    templateUrl:'./customers.component.html'
})

export class CustomersComponent implements OnInit {
    title:string;
    people:any[];
    isVisible = true;

    constructor(private dataService : DataService) {}

    ngOnInit() {
        this.title = "Customers";

    }
}