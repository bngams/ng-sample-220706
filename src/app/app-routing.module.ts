import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'get-started', component: GetStartedComponent},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
