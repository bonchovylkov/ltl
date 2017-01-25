import { NgModule} from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import {Register,Login,Home,Index,FsDetails,Dashboard} from './pages'
import {LoggedInGuard} from './services'

// const routes: Routes = [
//   { path: '',  redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', component:Home },
//   { path: 'fitnes-program/:id', component:FsDetails },
//   {path:'index',component:Index , canActivate:[LoggedInGuard] },
//    {path:'register',component:Register },
//    {path:'login',component:Login },
 
//   { path: '**', redirectTo: 'index' }
// ];

const routes: Routes = [
  { path: '',  redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:Home },
  {path:'register',component:Register },
   {path:'login',component:Login },
    {
    path: 'index',
    component: Index,
    canActivate:[LoggedInGuard],
    children: [
       { path: '', redirectTo: 'dashboard', pathMatch: 'full'  }, 
       { path: 'dashboard', component:Dashboard },
      { path: 'fitnes-program/:id', component:FsDetails },
    ]
  },
 
  { path: '**', redirectTo: 'home' }
];

//export const routing = RouterModule.forRoot(routes, { useHash: false });

//routing

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

 export class AppRouterModule {}