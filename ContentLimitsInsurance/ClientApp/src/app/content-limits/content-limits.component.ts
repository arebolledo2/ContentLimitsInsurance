import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-content-limits',
    templateUrl: './content-limits.component.html'
})
export class ContentLimitsComponent {
    public categories: Category[];

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        http.get<Category[]>(baseUrl + 'Content/GetCategories').subscribe(result => {
            this.categories = result;
        }, error => console.error(error));
    }
}

interface Category {
    name: string;
    contents: Content[];
}

interface Content {
    name: string;
    value: number;
}