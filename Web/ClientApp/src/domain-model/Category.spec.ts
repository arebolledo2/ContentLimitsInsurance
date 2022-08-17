import { Category } from '@domain-model/Category';
import { IContent } from '@domain-model/Content';

describe('Category', () => {
    it('should sum contents', (() => {
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
        let category1: Category = new Category(
            {
                name: "Category 1",
                contents: [],
                categoryId: 1
            });
        expect(category1.total()).toEqual(0);
        category1.contents = [content1, content2];
        expect(category1.total()).toEqual(300);
    }));
});
