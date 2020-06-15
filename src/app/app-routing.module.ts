import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TrackByFunctionComponent } from './track-by-function/track-by-function.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'track-by-function',
        component: TrackByFunctionComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    },
];

@NgModule({
    declarations: [
        HomeComponent,
        TrackByFunctionComponent,
        PageNotFoundComponent,
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }