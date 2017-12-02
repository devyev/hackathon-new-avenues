import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ManageComponent } from './manage/manage.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'manage',
    component: ManageComponent
  },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
