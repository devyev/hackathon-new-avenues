import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ManageComponent } from './manage/manage.component';
import { SearchComponent } from './search/search.component';
import { TestComponent } from './test/test.component';
import { ProgramsComponent } from './programs/programs.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'manage',
    component: ManageComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'programs',
    component: ProgramsComponent
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
