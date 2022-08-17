import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContentLimitsComponent } from './content-limits.component';
import { IContentLimitsService } from './content-limits.service'
import { MockContentLimitsService } from './mock.content-limits.service'

describe('ContentLimitsComponent', () => {
    let component: ContentLimitsComponent;
    let fixture: ComponentFixture<ContentLimitsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ContentLimitsComponent],
            providers: [
                { provide: IContentLimitsService, useClass: MockContentLimitsService },
                { provide: 'BASE_URL', useValue: 'Mock URL' }
            ],
            imports: [
                ReactiveFormsModule,
                MatListModule,
                MatSelectModule,
                MatInputModule,
                MatFormFieldModule,
                BrowserAnimationsModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContentLimitsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should display categories and contents', async(() => {
        expect(fixture.debugElement.queryAll(By.css('.mat-list-item')).length).toEqual(5);

    }));

    it('should use mock service', async(() => {
        expect(fixture.componentInstance.service).toBe(TestBed.get(IContentLimitsService));
    }));

    it('should display the correct total', async(() => {
        const total = fixture.nativeElement.querySelector('#total').textContent;
        expect(total).toEqual('$600');
    }));

    it('should add', async(() => {
        spyOn(fixture.componentInstance.service, 'add');
        component.contentForm.controls['contentName'].setValue("Content 1");
        component.contentForm.controls['contentValue'].setValue(500);
        component.contentForm.controls['contentCategory'].setValue({ categoryId: 10 });
        fixture.nativeElement.querySelector('#addButton').click();
        expect(fixture.componentInstance.service.add).toHaveBeenCalledWith(
            {
                name: "Content 1",
                value: 500,
                categoryId: 10
            });
    }));

    it('should delete', async(() => {
        spyOn(fixture.componentInstance.service, 'delete');
        fixture.nativeElement.querySelector('#delete_111').click();
        expect(fixture.componentInstance.service.delete).toHaveBeenCalledWith(
            {
                name: "Content 1",
                value: 100,
                contentId: 111,
                categoryId: 10
            });
    }));

});
