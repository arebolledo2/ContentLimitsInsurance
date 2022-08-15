import { IContent } from '@domain-model/Content';
/*//import { Injectable } from '@angular/core';*/
////export interface ICategory {
////    name: string;
////    contents: IContent[];
////    total: () => number;
////}

////@Injectable({
////    providedIn: 'root'
////})
export class Category {
    name: string;
    contents: IContent[];

    constructor(json:any) {
        this.name = json.name;
        this.contents = json.contents;
    }

    total() {
        var sum = 0;
        for (var i = 0; i < this.contents.length; i++) {
            sum += this.contents[i].value;
        }

        return sum;
    }
}