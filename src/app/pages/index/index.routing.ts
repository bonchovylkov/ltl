//this is not used, it's only for example how it migth be done
import { Routes, RouterModule }  from '@angular/router';

import { Index } from './index.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Index
  }
];

export const routing = RouterModule.forChild(routes);
