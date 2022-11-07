import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Station } from 'src/app/model/station';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss']
})
export class UpdateDialogComponent implements OnInit {

  id !: Number
  stationName !:string;
  stationCode !:string;
  updateForm!:FormGroup;

  constructor(private fb: FormBuilder, 
    public dialogRef: MatDialogRef<UpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data:Station){ 
      this.id = data.id
      this.stationName = data.stationName
      this.stationCode = data.stationCode
  }

  ngOnInit(): void {

    this.updateForm = this.fb.group({
      stationName: [this.stationName, [Validators.required, Validators.minLength(3)]],
      stationCode: [this.stationCode, [Validators.required, Validators.maxLength(5),Validators.minLength(3)]]
    });
  }

}
