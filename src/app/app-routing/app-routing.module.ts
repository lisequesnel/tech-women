import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from '../all/all.component';
import { RandomComponent } from '../random/random.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/random',
        pathMatch: 'full',
    },
    {
        path: 'random',
        component: RandomComponent,
    },
    {
        path: 'all',
        component: AllComponent,
    },
    {
        path: '**',
        redirectTo: '/random',
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
