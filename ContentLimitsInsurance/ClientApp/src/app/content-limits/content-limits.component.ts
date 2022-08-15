import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Category } from '@domain-model/Category';
import { Content } from '@domain-model/Content';


@Component({
    selector: 'app-content-limits',
    templateUrl: './content-limits.component.html'
})
export class ContentLimitsComponent {
    categories: Category[];
    filteredCategories: Category[];
    categoryForm: FormGroup;
    baseUrl: string;
    http: HttpClient;

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl;
        this.http = http;
        this.categoryForm = new FormGroup({
            contentName: new FormControl(),
            contentCategory: new FormControl(),
            contentValue: new FormControl()
        });

        this.refresh();
    }

    refresh() {
        this.http.get<Category[]>(this.baseUrl + 'Content/GetCategories').subscribe(result => {
            this.categories = result;
            this.filteredCategories = this.categories.filter(x => x.contents && x.contents.length > 0);
        }, error => console.error(error));
    }

    addCategory(formData) {
        var content = {
            name: formData.value.contentName,
            value: formData.value.contentValue,
            categoryId: formData.value.contentCategory.categoryId
        };
        console.log(content);
        this.http.post(this.baseUrl + 'Content/Add', content).subscribe(result => {
            this.refresh();
        });
    }

    deleteContent(content) {
        this.http.post(this.baseUrl + 'Content/Delete', content).subscribe(result => {
            this.refresh();
        });
    }
}