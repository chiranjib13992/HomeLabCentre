import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient.component';
import { PatientRoutingModule } from './patient-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { ViewPresciptionComponent } from './view-presciption/view-presciption.component';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { OdiaformComponent } from './odiaform/odiaform.component';
import { ImageFormComponent } from './image-form/image-form.component';
import { PatientdataComponent } from './patientdata/patientdata.component';


@NgModule({
  declarations: [
    PatientComponent,
    ViewPresciptionComponent,
    OdiaformComponent,
    ImageFormComponent,
    PatientdataComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule, 
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    MatChipsModule,
    MatCheckboxModule
  ]
})
export class PatientModule { }
