import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegprodOwlComponent } from './components/regprod-owl/regprod-owl.component';
import { HomeComponent } from './components/home/home.component';
import { RegprodQcComponent } from './components/regprod-qc/regprod-qc.component';
import { ViewRegistrationComponent} from './components/view-registration/view-registration.component';
const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'regprod-owl/view/:id',
    component: ViewRegistrationComponent
  },
  {
  path: 'regprod-owl',
  component: RegprodOwlComponent
  },
  {
    path: 'regprod-qc',
    component: RegprodQcComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
