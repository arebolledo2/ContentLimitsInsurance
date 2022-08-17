import { Injectable } from '@angular/core';
import { Category } from '@domain-model/Category';
import { Observable, throwError, of } from 'rxjs';
import { IContent } from '@domain-model/Content';
import { IContentLimitsService } from './content-limits.service'

@Injectable()
export class MockContentLimitsService implements IContentLimitsService {
    getCategories(): Observable<Category[]> {
        var content1 = {
            name: "Content 1",
            value: 100,
            contentId: 111,
            categoryId: 10
        } as IContent;
        var content2 = {
            name: "Content 2",
            value: 200,
            contentId: 222,
            categoryId: 20
        } as IContent;
        var content3 = {
            name: "Content 3",
            value: 300,
            contentId: 333,
            categoryId: 30
        } as IContent;
        let category1: Category = new Category(
            {
                name: "Category 1",
                contents: [content1, content2],
                categoryId: 1
            });
        let category2: Category = new Category(
            {
                name: "Category 2",
                contents: [content3],
                categoryId: 2
            });
        return of<Category[]>([category1, category2]);
    }

    add(content: IContent): Observable<Object> {
        return new Observable<Object>();
    }

    delete(content: IContent): Observable<Object> {
        return new Observable<Object>();

    }
}
