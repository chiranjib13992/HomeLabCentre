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
  isChecked: boolean = false
  selectedDoctor: any;
  constructor(private global: GlobalService){
   this.global.docData$.subscribe((data)=>{
    if(data == 'Eye'){
   this.eyeDoct = [{name:'Abinash',experience:'20-23 years',address:'Patia',videoConsult: false},{name:'Abhisekh',experience:'5-6 years',address:'Nayapalli',videoConsult: true},{name:'Anu',experience:'8-9 years',address:'Jagamara',videoConsult: true},{name:'Ajay',experience:'14-15 years',address:'Khandagiri',videoConsult: true},{name:'Paras',experience:'7-8 years',address:'Sundarpada',videoConsult: false}]
   console.log(this.eyeDoct);
   this.showEyeDoct = true;
   this.showDentalDoc = false
   this.showGenralDoc = false
   this.showorthopedicDoc = false
    }
    else if(data == 'Dentist'){
     this.dentalDOc = [{name:'Chitta',experience:'19-20 years',address:'Vaani Vihar',videoConsult: false},{name:'Satya',experience:'8-9 years',address:'Saheed Nagar',videoConsult: false},{name:'Pankaj',experience:'11-12 years',address:'Jaydev Vihar',videoConsult: true}]
     this.showDentalDoc = true
     this.showEyeDoct = false
     this.showGenralDoc = false
     this.showorthopedicDoc = false
    } else if(data == 'General'){
   this.generalDoc = [{name:'Surya',experience:'5-6 years', address:'Pokhariput', videoConsult: false},{name:'Rohit',experience:'12-13 years', address:'Patia', videoConsult: true},{name:'Sitaram',experience:'8-9 years', address:'Pokhariput', videoConsult: true},{name:'Nigam',experience:'16-17 years', address:'Nayapalli', videoConsult: true},{name:'Dheeraj',experience:'7-8 years', address:'Vaani Vihar', videoConsult: true},{name:'Arjun',experience:'18-19years', address:'Kalinga Nagar', videoConsult: true}]
   console.log(this.generalDoc);
   
   this.showGenralDoc = true
   this.showEyeDoct = false
   this.showDentalDoc = false
   this.showorthopedicDoc = false
    } else if(data == 'Orthopedic'){
     this.orthopedicDoc = [{name:'Dinesh',experience:'5-6 years', address:'Uttara', videoConsult: false},{name:'Geetanjali',experience:'10-11 years', address:'Rasulgarh',videoConsult: true},{name:'Krishna',experience:'15-16 years', address:'Laxmi Sagar',videoConsult: true},{name:'Ishan',experience:'07-08 years', address:'Sundarpada',videoConsult: true},{name:'Jasprit',experience:'09-10 years', address:'Prasanti Viahar',videoConsult: true}]
     this.showorthopedicDoc = true
     this.showDentalDoc = false
     this.showEyeDoct = false
     this.showGenralDoc = false
    }
    
   })
  } 
  onChange(e:any){
    console.log(e,'eeee');
    console.log(e.checked);
    
    this.global.docData$.subscribe((data)=>{
      if(data == 'Eye' && e.checked == true){
        this.filteredArr = this.eyeDoct.filter(doc=> doc.videoConsult === true);
        this.eyeDoct = this.filteredArr;
      } else if(data == 'Eye' && e.checked == false){
        this.eyeDoct = [{name:'Abinash',experience:'20-23 years',address:'Patia',videoConsult: false},{name:'Abhisekh',experience:'5-6 years',address:'Nayapalli',videoConsult: true},{name:'Anu',experience:'8-9 years',address:'Jagamara',videoConsult: true},{name:'Ajay',experience:'14-15 years',address:'Khandagiri',videoConsult: true},{name:'Paras',experience:'7-8 years',address:'Sundarpada',videoConsult: false}]
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
