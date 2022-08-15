import { Injectable, Inject } from '@angular/core';
import { Category } from '@domain-model/Category';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IContent } from '@domain-model/Content';
import { map, catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class ContentLimitsService {
    baseUrl: string;
    http: HttpClient;

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl;
        this.http = http;
    }
    getCategories(): Observable<Category[]> {
        // https://stackoverflow.com/questions/42899570/method-in-typescript-class-give-error-is-not-a-function
        // https://florimond.dev/en/posts/2018/09/consuming-apis-in-angular-the-model-adapter-pattern/
        return this.http.get<Category[]>(this.baseUrl + 'Content/GetCategories')
            .pipe(map((data: any) => data.map((item: any) => new Category(item))));
    }

    add(content: IContent) {
        return this.http.post(this.baseUrl + 'Content/Add', content);
    }

    delete(content: IContent) {
        return this.http.post(this.baseUrl + 'Content/Delete', content);
    }
}