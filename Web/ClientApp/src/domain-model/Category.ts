import { IContent } from '@domain-model/Content';

export class Category {
    name: string;
    contents: IContent[];
    categoryId: number;

    constructor(json: any) {
        this.name = json.name;
        this.contents = json.contents;
        this.categoryId = json.categoryId;
    }

    total() {
        var sum = 0;
        for (var i = 0; i < this.contents.length; i++) {
            sum += this.contents[i].value;
        }

        return sum;
    }
}
