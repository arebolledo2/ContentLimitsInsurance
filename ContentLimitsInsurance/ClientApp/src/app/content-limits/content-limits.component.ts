import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Category } from '@domain-model/Category';
import { IContent } from '@domain-model/Content';
import { ContentLimitsService } from './content-limits.service'

@Component({
    selector: 'app-content-limits',
    templateUrl: './content-limits.component.html'
})
export class ContentLimitsComponent {
    categories: Category[];
    filteredCategories: Category[];
    contentForm: FormGroup;
    service: ContentLimitsService;

    constructor(service: ContentLimitsService, @Inject('BASE_URL') baseUrl: string) {
        this.contentForm = new FormGroup({
            contentName: new FormControl(),
            contentCategory: new FormControl(),
            contentValue: new FormControl()
        });
        this.service = service;

        this.refresh();
    }

    refresh() {
        this.service.getCategories().subscribe(result => {
            this.categories = result;
            this.filteredCategories = this.categories.filter(x => x.contents && x.contents.length > 0);
        }, error => console.error(error));
    }

    addContent(formData) {
        var content = {
            name: formData.value.contentName,
            value: formData.value.contentValue,
            categoryId: formData.value.contentCategory.categoryId
        };
        
        this.service.add(content).subscribe(result => {
            this.refresh();
        });
    }

    deleteContent(content: IContent) {
        this.service.delete(content).subscribe(result => {
            this.refresh();
        });
    }

    sumContents() {
        var sum = 0;
        if (this.categories && this.categories.length > 0) {
            for (var i = 0; i < this.categories.length; i++) {
                sum += this.categories[i].total();
            }
        }
        return sum;
    }
}