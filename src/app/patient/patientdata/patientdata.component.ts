import { HttpClient } from '@angular/common/http';
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
  id!:any
  isDisPlay:boolean = true;
  form!: FormGroup
  presForm!: FormGroup
  uploadedPrescriptions: File[] = [];
  constructor(private fb: FormBuilder,
    private http:HttpClient,
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
      // id: [''],
      file: [Validators.required],
      prescriptionList:new FormControl('')
    })
  }

  submitImage(){
    console.log(this.presForm.value);
    //console.log(this.presForm.get('prescriptionList')?.value);
    this.uploadedPrescriptions.push(this.presForm.get('file')?.value)
    console.log('jsg array',this.id,'...');

      const imageForm=new FormData()
        // imageForm.append('id',this.presForm.get('id')?.value)
        imageForm.append('file',this.presForm.get('file')?.value)

       this.http.put(`http://localhost:8080/patient/upload/prescription/${this.id}`,imageForm).subscribe((res)=> {
        console.log(res)
       },
       
       (err)=> {
        console.log(err)
       }
       )
    
    
    }
    submit(){
      if(this.form.valid){
        console.log(this.form.value);
        // const userFormData = new FormData();
        // userFormData.append('name',this.form.get('name')?.value);
        // userFormData.append('symptoms',this.form.get('symptoms')?.value);
        // userFormData.append('age', this.form.get('age')?.value);
        // userFormData.append('gender',this.form.get('gender')?.value);
        // console.log('FormData:', userFormData)
        this.global.postPatientData(this.form.value).subscribe((res)=>{
          console.log('data is ..',res);
          this.id=res
          
          this.isDisPlay = false 

          
        },
        (err)=>{
          console.log(err);
          
        })
      //  const imageForm=new FormData()
      //   imageForm.append('id',this.presForm.get('id')?.value)
      //   imageForm.append('uploadPresciption',this.presForm.get('uploadPresciption')?.value)

      //  this.http.post(`http://localhost:8080/patient/upload/prescription/${this.presForm.get('id')?.value}`,imageForm).subscribe((res)=> {
      //   console.log(res)
      //  },
       
      //  (err)=> {
      //   console.log(err)
      //  }
      //  )

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
        const imageFile = event.target.files[0];
        this.presForm.patchValue({
          file: imageFile
        })
        this.form.get('file')?.updateValueAndValidity();
       
      }
}
