import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-patientdata',
  templateUrl: './patientdata.component.html',
  styleUrls: ['./patientdata.component.scss']
})
export class PatientdataComponent {
  isDisPlay:boolean = true;
  form!: FormGroup
  presForm!: FormGroup
  uploadedPrescriptions: File[] = [];
  constructor(private fb: FormBuilder,
    private dialog: MatDialog ,
     private global: GlobalService,
     private route: ActivatedRoute){
    this.form = this.fb.group({
      name: new FormControl('',[Validators.required,Validators.minLength(6)]),
      symptoms: new FormControl('',[Validators.required,Validators.minLength(6)]),
      age: new FormControl('',[Validators.required,Validators.maxLength(2)]),
      gender: new FormControl('',[Validators.required]),
    })
    this.presForm = this.fb.group({
      id: [''],
      uploadPresciption: [Validators.required],
      prescriptionList:new FormControl('')
    })
  }

  submitImage(){
    console.log(this.presForm.value);
    //console.log(this.presForm.get('prescriptionList')?.value);
    this.uploadedPrescriptions.push(this.presForm.get('uploadPresciption')?.value)
    console.log('jsg array',this.uploadedPrescriptions);
    
    
    }
    submit(){
      // this.isDisPlay = false 
      if(this.form.valid){
        console.log(this.form.value);
        const userFormData = new FormData();
        userFormData.append('name',this.form.get('name')?.value);
        userFormData.append('symptoms',this.form.get('symptoms')?.value);
        userFormData.append('age', this.form.get('age')?.value);
        userFormData.append('gender',this.form.get('gender')?.value);
        console.log('FormData:', userFormData)
         this.global.postPatientData(userFormData).subscribe((res)=>{
          console.log('data is ..',res);
          const a = res.hasOwnProperty('message').valueOf;
          console.log(a);
          
          
        },
        (err)=>{
          console.log(err);
          
        })
      }
      
    }
    yesChange(){
      this.uploadedPrescriptions.pop()
      this.presForm.reset();
      } 
      containsFiles(): boolean {
        return this.uploadedPrescriptions.some(item => item instanceof File);
      }
      onFileChange(event: any){
        const file = event.target.files[0];
        this.presForm.patchValue({
          uploadPresciption: file
        })
        this.form.get('uploadPresciption')?.updateValueAndValidity();
       
      }
}
