import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Station } from 'src/app/model/station';
import { Child1FormServiceService } from 'src/app/services/child1-form-service/child1-form-service.service';
import { SubmitDialogComponent } from 'src/app/shared/submit-dialog/submit-dialog.component';

@Component({
  selector: 'app-child1-table-view',
  templateUrl: './child1-table-view.component.html',
  styleUrls: ['./child1-table-view.component.scss']
})
export class Child1TableViewComponent implements OnInit {

  @ViewChild(MatPaginator) paginator !: MatPaginator
  @ViewChild(MatSort) sort !: MatSort
  displayedColumns: string[] = ['StationName', 'StationCode', 'Delete']

  dataSource = new MatTableDataSource<Station>()
  dialogRef !: MatDialogRef<SubmitDialogComponent>
  stationArray !: Station[]

  constructor(private service:Child1FormServiceService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    
    this.service.loadAll()
    // indirect observable data injection into datasource using subscribe
    this.service.retrieveArray().subscribe(result =>{
      console.log("result: "+JSON.stringify(result))
      this.stationArray = result
      this.dataSource.data = result
    })

    console.log("Data source: "+JSON.stringify(this.dataSource.data))
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openConfirmationDialog(id:Number){
    this.dialogRef = this.dialog.open(SubmitDialogComponent,{
      disableClose: false
    });
    this.dialogRef.afterClosed().subscribe(result => {
        if(result)
          this.deleteStation(id)
      }
    )
  }

  deleteStation(id:Number) {
    console.log("customer form")
    console.log('Saved Before Update: ' + id);

    // this.service.deleteStation(id).then((station:Station) =>{
    //   if(station){
    //     this.openSnackBar('Station deleted','Close')
    //   }
    // })
  }

  openSnackBar(message: string, action:string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message,action,{
      duration:4000
    });
  }

}
