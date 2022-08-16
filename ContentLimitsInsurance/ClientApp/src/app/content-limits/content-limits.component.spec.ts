import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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

    ////it('should display categories', async(() => {
    ////    const titleText = fixture.nativeElement.querySelector('h1').textContent;
    ////    expect(titleText).toEqual('Counter');
    ////}));

    ////it('should use mock service', async(() => {
    ////    expect(fixture.componentInstance.service).toBe(TestBed.get(IContentLimitsService));
    ////}));

    it('should display a total', async(() => {
        const total = fixture.nativeElement.querySelector('#total').textContent;
        expect(total).toEqual('$600');
    }));

    ////it('should add', async(() => {
    ////    const titleText = fixture.nativeElement.querySelector('h1').textContent;
    ////    expect(titleText).toEqual('Counter');
    ////}));

    ////it('should delete', async(() => {
    ////    const titleText = fixture.nativeElement.querySelector('h1').textContent;
    ////    expect(titleText).toEqual('Counter');
    ////}));

    ////it('should start with count 0, then increments by 1 when clicked', async(() => {
    ////    const countElement = fixture.nativeElement.querySelector('strong');
    ////    expect(countElement.textContent).toEqual('0');

    ////    const incrementButton = fixture.nativeElement.querySelector('button');
    ////    incrementButton.click();
    ////    fixture.detectChanges();
    ////    expect(countElement.textContent).toEqual('1');
    ////}));
});