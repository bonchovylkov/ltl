import { NgModule} from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import {Register,Login,Home,Index} from './pages'
import {LoggedInGuard} from './services'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:Home },
  {path:'index',component:Index , canActivate:[LoggedInGuard] },
   {path:'register',component:Register },
   {path:'login',component:Login },
 
  { path: '**', redirectTo: 'index' }
];

//export const routing = RouterModule.forRoot(routes, { useHash: false });

//routing

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

 export class AppRouterModule {}