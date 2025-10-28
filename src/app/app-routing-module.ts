import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';

const routes: Routes = [
  {path: '', component: Home},
  {path: 'movies', loadChildren: () => import('./movies/movies-module').then(m => m.MoviesModule)},
  {path: 'account', loadChildren: () => import('./account/account-module').then(m => m.AccountModule)},
  {path: 'admin', loadChildren: () => import('./admin/admin-module').then(m => m.AdminModule)},
  {path: 'user', loadChildren: () => import('./user/user-module').then(m => m.UserModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
