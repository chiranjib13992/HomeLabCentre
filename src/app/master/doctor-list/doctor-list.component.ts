import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent {
  eyeDoct: Array<any> = []
  dentalDOc:any = []
  generalDoc:any = []
  orthopedicDoc:any =[]
  filteredArr : any[] =[]
  isFiltered: boolean = false;
  showEyeDoct: boolean = false
  showDentalDoc: boolean = false
  showGenralDoc: boolean = false
  showorthopedicDoc: boolean = false
  selectedDoctor: any;
  constructor(private global: GlobalService){
   this.global.docData$.subscribe((data)=>{
    if(data == 'Eye'){
   this.eyeDoct = [{name:'Abinash',experience:'20-23 years',address:'Patia'},{name:'Abhisekh',experience:'5-06 years',address:'Nayapalli'},{name:'Anu',experience:'11-12 years',address:'Jagamara'},{name:'Ajay',experience:'14-15 years',address:'Khandagiri'},{name:'Paras',experience:'16-17 years',address:'Sundarpada'}]
   console.log(this.eyeDoct);
   this.showEyeDoct = true;
   this.showDentalDoc = false
   this.showGenralDoc = false
   this.showorthopedicDoc = false
    }
    else if(data == 'Dentist'){
     this.dentalDOc = [{name:'Chitta',experience:'15-20 years',address:'Vaani Vihar'},{name:'Satya',experience:'10-12 years',address:'Saheed Nagar'},{name:'Pankaj',experience:'7-10 years',address:'Jaydev Vihar'}]
     this.showDentalDoc = true
     this.showEyeDoct = false
     this.showGenralDoc = false
     this.showorthopedicDoc = false
    } else if(data == 'General'){
   this.generalDoc = [{name:'Sitaram',experience:'10-11 years', address:'Pokhariput'},{name:'Nigam',experience:'16-18 years', address:'Nayapalli'},{name:'Dheeraj',experience:'10-15 years', address:'Vaani Vihar'},{name:'Arjun',experience:'18-19years', address:'Kalinga Nagar'}]
   console.log(this.generalDoc);
   
   this.showGenralDoc = true
   this.showEyeDoct = false
   this.showDentalDoc = false
   this.showorthopedicDoc = false
    } else if(data == 'Orthopedic'){
     this.orthopedicDoc = [{name:'Dinesh',experience:'5-6 years', address:'Uttara'},{name:'Geetanjali',experience:'10-11 years', address:'Rasulgarh'},{name:'Krishna',experience:'15-16 years', address:'Laxmi Sagar'}]
     this.showorthopedicDoc = true
     this.showDentalDoc = false
     this.showEyeDoct = false
     this.showGenralDoc = false
    }
    
   })
  } 

  filterList(){
    this.global.docData$.subscribe((data)=>{
      if(data == 'Eye'){
        console.log('done');
        
        this.filteredArr = this.eyeDoct.filter((doc)=>{
          const experienceRange =doc.experience.split('-')
          const minExperience = parseInt(experienceRange[0])
          return minExperience >10;
        })
        this.eyeDoct = this.filteredArr;
        console.log(this.eyeDoct);
        this.isFiltered = true
        
        
      }
    })
  }
  openSlotBook(doc: any){
  this.selectedDoctor = doc;
  console.log(doc);
  
  }
  resetFilter(){
    this.eyeDoct =  [{name:'Abinash',experience:'20-23 years',address:'Patia'},{name:'Abhisekh',experience:'5-06 years',address:'Nayapalli'},{name:'Anu',experience:'11-12 years',address:'Jagamara'},{name:'Ajay',experience:'14-15 years',address:'Khandagiri'},{name:'Paras',experience:'16-17 years',address:'Sundarpada'}]
    this.isFiltered = false;
  }
}
