import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.scss']
})
export class ImageFormComponent {
  imageForm!: FormGroup
constructor(private fb:FormBuilder,private global: GlobalService){
   this.imageForm = this.fb.group({
    image: [null,Validators.required]
   })
}
onFileChange(event: any){
  const file = event.target.files[0];
  this.imageForm.patchValue({
    image:file
  })
  this.imageForm.get('image')?.updateValueAndValidity()
}
submit(){
  console.log(this.imageForm.value);
  const userFormData = new FormData();
  userFormData.append('image',this.imageForm.get('image')?.value)
  this.global.sendImage(userFormData).subscribe((res)=>{
    console.log(res, 'res is here');
    
  })
}
}
