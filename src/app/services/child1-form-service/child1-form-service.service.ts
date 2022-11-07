import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ApiResponse } from 'src/app/model/response';
import { Station } from 'src/app/model/station';
import { StationForm } from 'src/app/model/station copy';

@Injectable({
  providedIn: 'root'
})

export class Child1FormServiceService {
  
  private _child1!: BehaviorSubject<Station[]>;
  headers !: HttpHeaders

  getAllStations = 'http://localhost:8090/railways/api/stations/all';
  addStation = 'http://localhost:8090/railways/api/stations/addStation';
  deleteStation = 'http://localhost:8090/railways/api/stations/deleteById?id=';

  private dataStore: {
    array: Station[]
  }

  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders()
    this.dataStore = { array: []};
    this._child1 = new BehaviorSubject<Station[]>([]);
  }

  addNewElement(element:StationForm):Promise<StationForm>{
    return new Promise((resolver, reject)=>{

      this.addStations(element).subscribe(res =>{
        console.log('addStation: '+JSON.stringify(res))
        resolver(element)
      })
    })
  }

  addStations(element:StationForm):Observable<Station>{
    this.headers.append('Contact-Type','application/json')
    return this.http.post<Station>(this.addStation,element,{headers:this.headers});
  }

  retrieveArray():Observable<Station[]>{
    return this._child1.asObservable();
  }

  getStations():Observable<ApiResponse>{
    return this.http.get<any>(this.getAllStations);
  }

  loadAll(){
    this.getStations().subscribe((res: ApiResponse) => {
      this.dataStore.array = res.data
      this._child1.next(Object.assign({},this.dataStore).array)
    });
  }

  deleteStationById(id:Number):Observable<ApiResponse>{
    return this.http.delete<ApiResponse>(this.deleteStation+id);
  }

  deleteElement(id: Number):Promise<Number>{
    return new Promise((resolver, reject)=>{
      this.deleteStationById(id).subscribe((response:ApiResponse)=>{
        console.log(" promise element: "+id);
        console.log(" promise result: "+JSON.stringify(response.data));
        resolver(id)
      })
    })
  }

  updateElement(station: Station):Promise<Station>{
    return new Promise((resolver, reject)=>{
      this.updateStationById(station).subscribe((response:ApiResponse)=>{
        console.log(" promise element: "+JSON.stringify(station));
        console.log(" promise result: "+JSON.stringify(response.data));
        resolver(station)
      })
    })
  }

  updateStationById(station:Station):Observable<ApiResponse>{
    return this.http.patch<any>('',station);
  }
}
