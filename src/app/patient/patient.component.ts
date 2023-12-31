import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ViewPresciptionComponent } from './view-presciption/view-presciption.component';
import { GlobalService } from '../services/global.service';
import { ActivatedRoute } from '@angular/router';
import {saveAs} from 'file-saver'

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
userName: string = ''
isDisPlay:boolean = true;
isPrescription :boolean = false;
form!: FormGroup
presForm!: FormGroup
disList : any[] = []
user: any;
disease =['Diabetes','Cardiovascular','Cancer']
prescriptionImageURL: string | ArrayBuffer | any | null = null ;
imageFile: File | null = null;
uploadedPrescriptions: File[] = [];
showDisList: boolean = false;
lang: string = 'English';
isLang: boolean = false;
constructor(private fb: FormBuilder,
  private dialog: MatDialog ,
   private global: GlobalService,
   private route: ActivatedRoute){
  this.form = this.fb.group({
    name: new FormControl('',[Validators.required,Validators.minLength(6)]),
    symptoms: new FormControl('',[Validators.required,Validators.minLength(6)]),
    age: new FormControl('',[Validators.required,Validators.maxLength(2)]),
    gender: new FormControl('',[Validators.required]),
    //previouDisease: new FormControl('',[Validators.required]),
   // disEase: [],   
   // uploadPresciption: [null,Validators.required]
  })
  this.presForm = this.fb.group({
    id: [''],
    uploadPresciption: [Validators.required],
    prescriptionList:new FormControl('')
  })
}

ngOnInit() {
 
}
containsFiles(): boolean {
  return this.uploadedPrescriptions.some(item => item instanceof File);
}
getData(id: string){
  console.log(id);
  
  this.global.getUser(id).subscribe((res)=>{
    this.user = res;
    console.log('data is ', this.user);
    
  }, (error) => {
    console.error('Error fetching user data:', error);
  })
}
onFileChange(event: any){

  const file = event.target.files[0];
 // this.imageFile = file

  this.presForm.patchValue({
    uploadPresciption: file
  })
  this.form.get('uploadPresciption')?.updateValueAndValidity();
  //console.log(this.imageFile, 'hdsdj');
  
  // if (file) {
  //   const reader = new FileReader();
  //   reader.onload = (e) => {
  //     this.prescriptionImageURL = e.target?.result;
  //   };
  //   reader.readAsDataURL(file); 
  // }
  
}
submitImage(){
console.log(this.presForm.value);
this.isPrescription = true;
//console.log(this.presForm.get('prescriptionList')?.value);
this.uploadedPrescriptions.push(this.presForm.get('uploadPresciption')?.value)
console.log('jsg array',this.uploadedPrescriptions);


}
yesChange(){
this.uploadedPrescriptions.pop()
this.presForm.reset();
} 
 submit(){
    this.isDisPlay = false
    console.log(this.form.value);
    if(this.form.valid){
      console.log(this.form.value);
      const userFormData = new FormData();
      //userFormData.append('patientData',JSON.stringify(userData))
      userFormData.append('name',this.form.get('name')?.value);
      userFormData.append('symptoms',this.form.get('symptoms')?.value);
      userFormData.append('age', this.form.get('age')?.value);
      userFormData.append('gender',this.form.get('gender')?.value);
      // userFormData.append('previouDisease',this.form.get('previouDisease')?.value);
      // userFormData.append('disEase',JSON.stringify(this.form.get('disEase')?.value));
      //  userFormData.append('uploadPresciption',this.form.get('uploadPresciption')?.value);
      //console.log(this.imageFile, 'hdsdj');
      console.log('FormData:', userFormData)
       this.global.postPatientData(userFormData).subscribe((res)=>{
        console.log('data is ..',res);
        
      },
      (err)=>{
        console.log(err);
        
      })
    }
    
  }

  prevDisease(){
    if(this.form.get('previouDisease')?.value == '1'){
    this.showDisList = true
    } else{
      this.showDisList = false  
    }
  }

  get disEase(): FormArray{
    return this.form.get('disEase') as FormArray
  }
 
  
  viewPres(){
    if(this.prescriptionImageURL){
      this.dialog.open(ViewPresciptionComponent)
    }
  }
 
  changeLang(){
    if(this.isLang == false){
         this.isLang = true;
         this.lang = 'Odia'
    } else if(this.isLang == true){
      this.isLang = false;
         this.lang = 'English'
    } 
  }
  doownloadPres(){
    const imageName = this.userName;
    console.log(imageName);
    
    this.global.downloadPres(imageName).subscribe((data :Blob | MediaSource)=>{
      //const blob = new Blob([data], { type: 'image/jpeg' });
      const url = window.URL.createObjectURL(data);
      saveAs(url)
    })
  }
  }


