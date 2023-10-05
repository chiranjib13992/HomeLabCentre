import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient.component';
import { ImageFormComponent } from './image-form/image-form.component';


const routes: Routes = [
    {path:'',redirectTo:'',pathMatch:'full'},
    {path:'form',component:PatientComponent},
    {path:'image',component:ImageFormComponent}
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class PatientRoutingModule {}