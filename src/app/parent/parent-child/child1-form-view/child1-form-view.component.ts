import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { Station } from 'src/app/model/station';
import { StationForm } from 'src/app/model/station copy';
import { Child1FormServiceService } from 'src/app/services/child1-form-service/child1-form-service.service';
import { SubmitDialogComponent } from 'src/app/shared/submit-dialog/submit-dialog.component';
import { Child1TableViewComponent } from '../child1-table-view/child1-table-view.component';

@Component({
  selector: 'app-child1-form-view',
  templateUrl: './child1-form-view.component.html',
  styleUrls: ['./child1-form-view.component.scss']
})
export class Child1FormViewComponent implements OnInit {

  stationForm!: FormGroup;
  dialogRef !: MatDialogRef<SubmitDialogComponent>

  constructor(
    private fb: FormBuilder, 
    private service:Child1FormServiceService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog) { }

  ngOnInit(): void {    
  this.stationForm = this.fb.group({
    stationName: ['', [Validators.required, Validators.minLength(3)]],
    stationCode: ['', [Validators.required, Validators.maxLength(5),Validators.minLength(3)]]
  });
  }

  openConfirmationDialog(){
    this.dialogRef = this.dialog.open(SubmitDialogComponent,{
      disableClose: false
    });
    this.dialogRef.afterClosed().subscribe(result => {
        if(result)
          this.saved()
      }
    )
  }

  saved() {
    console.log("customer form")
    console.log('Saved Before Update: ' + JSON.stringify(this.stationForm.value));
    console.log("Station stationName: "+this.stationForm.get("stationName")?.value);
    
    let formRef :StationForm = {
      "stationName": this.stationForm.get("stationName")?.value,
      "stationCode": this.stationForm.get("stationCode")?.value 
    }

    this.service.addNewElement(formRef).then(station =>{
      if(station){
        let child1 = new Child1TableViewComponent(this.service, this.snackBar,this.dialog);
        child1.refresh()
        this.openSnackBar('Station added','Close')
      }
    })

    this.service.loadAll();
    this.stationForm.reset();
  }

  openSnackBar(message: string, action:string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message,action,{
      duration:4000
    });
  }

}
