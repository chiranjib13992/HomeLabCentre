import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ViewPresciptionComponent } from './view-presciption/view-presciption.component';
import { GlobalService } from '../services/global.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
form!: FormGroup
disList : any[] = []
user: any;
imageFile : any;
disease =['Diabetes','Cardiovascular','Cancer']
prescriptionImageURL: string | ArrayBuffer | any | null = null ;
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
    previouDisease: new FormControl('',[Validators.required]),
    uploadPresciption: [''],
    disEase: []
  })
}

ngOnInit() {
 
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

  submit(){
    if(this.form.valid){
      console.log(this.form.value);
      
      const userFormData = new FormData();
      userFormData.append('name',this.form.get('name')?.value);
      userFormData.append('symptoms',this.form.get('symptoms')?.value);
      userFormData.append('age', this.form.get('age')?.value);
      userFormData.append('gender',this.form.get('gender')?.value);
      userFormData.append('previouDisease',this.form.get('previouDisease')?.value);
      userFormData.append('uploadPresciption',this.imageFile);
      userFormData.append('disEase',this.form.get('disEase')?.value);

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
      this.dialog.open(ViewPresciptionComponent,{
        data: {imageURL:this.prescriptionImageURL}
      })
    }
  }
  onFileChange(event: any){
    this.imageFile = <File> event.target.files[0];
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onload = (e) => {
    //     this.prescriptionImageURL = e.target?.result;
    //   };
    //   reader.readAsDataURL(file); 
    // }
    
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
  }


