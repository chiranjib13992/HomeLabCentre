import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenuComponent } from './pages/menu/menu.component';
import { DoctorComponent } from './doctor.component';

const routes: Routes = [
    {path:'',redirectTo:'',pathMatch:'full'},
    {path:'',component:DoctorComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'menu',component:MenuComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class DoctorMasterModule {}