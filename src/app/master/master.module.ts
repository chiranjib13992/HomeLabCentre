import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master.component';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'; 
import { MasterRoutingModule } from './master-routing.module';
import { StaffsComponent } from './staffs/staffs.component';
import { AddeditstaffsComponent } from './addeditstaffs/addeditstaffs.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SearchComponent } from './search/search.component';
import { FindDocComponent } from './find-doc/find-doc.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { BookslotComponent } from './bookslot/bookslot.component';



@NgModule({
  declarations: [
    MasterComponent,
    StaffsComponent,
    AddeditstaffsComponent,
    SearchComponent,
    FindDocComponent,
    DoctorListComponent,
    BookslotComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MasterRoutingModule,
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
    MatDialogModule
  ]
})
export class MasterModule { }
