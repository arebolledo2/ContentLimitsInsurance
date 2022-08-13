import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Category } from '@domain-model/Category';
import { Content } from '@domain-model/Content';

@Component({
    selector: 'app-content-limits',
    templateUrl: './content-limits.component.html'
})
export class ContentLimitsComponent {
    public categories: Category[];
    contentForm;

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private formBuilder: FormBuilder) {
        this.contentForm = this.formBuilder.group({
            name: [''],
            category: [''],
            value: ['']
        });

        http.get<Category[]>(baseUrl + 'Content/GetCategories').subscribe(result => {
            this.categories = result;
        }, error => console.error(error));
    }

    onSubmit(formData) {
        console.log('Posted!');
    }
}