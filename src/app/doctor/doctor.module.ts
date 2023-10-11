import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { DoctorMasterModule } from './doctor-routing.module';
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
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [
    DoctorComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    MenuComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    DoctorMasterModule,
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
    MatCheckboxModule
  ]
})
export class DoctorModule { }
