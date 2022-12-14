import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ContentLimitsComponent } from './content-limits/content-limits.component';
import { IContentLimitsService, ContentLimitsService } from './content-limits/content-limits.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        ContentLimitsComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: '/content-limits', pathMatch: 'full' },
            { path: 'content-limits', component: ContentLimitsComponent },
        ]),
        BrowserAnimationsModule,
        MatListModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule
    ],
    providers: [
        { provide: IContentLimitsService, useClass: ContentLimitsService },
        { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }],
    bootstrap: [AppComponent]
})
export class AppModule { }
