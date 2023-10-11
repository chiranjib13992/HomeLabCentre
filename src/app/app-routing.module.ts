import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'auth',pathMatch:'full'},
  {path:'auth',loadChildren: ()=> import('./auth/auth.module').then(mod=>mod.AuthModule)},
  {path:'master',loadChildren: ()=> import('./master/master.module').then(mod=>mod.MasterModule)},
  {path:'patient',loadChildren: ()=> import('./patient/patient.module').then(mod=>mod.PatientModule)},
  {path:'doctor',loadChildren: ()=> import('./doctor/doctor.module').then(mod=>mod.DoctorModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
