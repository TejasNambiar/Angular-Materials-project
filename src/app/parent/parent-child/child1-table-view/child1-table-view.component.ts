import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Station } from 'src/app/model/station';
import { Child1FormServiceService } from 'src/app/services/child1-form-service/child1-form-service.service';

@Component({
  selector: 'app-child1-table-view',
  templateUrl: './child1-table-view.component.html',
  styleUrls: ['./child1-table-view.component.scss']
})
export class Child1TableViewComponent implements OnInit {

  @ViewChild(MatPaginator) paginator !: MatPaginator
  @ViewChild(MatSort) sort !: MatSort
  displayedColumns: string[] = ['Station Name', 'Station Code']

  dataSource = new MatTableDataSource<Station>()
  stationArray !: Station[]

  constructor(private service:Child1FormServiceService) { }

  ngOnInit(): void {
    
    this.service.loadAll()
    // indirect observable data injection into datasource using subscribe
    this.service.retrieveArray().subscribe(result =>{
      console.log("result: "+JSON.stringify(result))
      this.stationArray = result
      this.dataSource.data = result
      console.log("station Array: "+this.stationArray)
    })

  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
