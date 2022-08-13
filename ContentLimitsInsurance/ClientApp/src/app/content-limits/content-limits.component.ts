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
    public categories: Category[];
    contentForm;

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.contentForm = new FormGroup({
            contentName: new FormControl(),
            contentCategory: new FormControl(),
            contentValue: new FormControl()
        });

        http.get<Category[]>(baseUrl + 'Content/GetCategories').subscribe(result => {
            this.categories = result;
        }, error => console.error(error));
    }

    onSubmit(formData) {
        console.log(this.contentForm.get('contentCategory').value);
    }
}