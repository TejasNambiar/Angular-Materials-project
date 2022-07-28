import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Station } from 'src/app/model/station';

@Injectable({
  providedIn: 'root'
})
export class Child1FormServiceService {
  
  private _child1!: BehaviorSubject<Station[]>;

  private dataStore: {
    array: Station[]
  }

  constructor() { 
    this.dataStore = { array: []};
    this._child1 = new BehaviorSubject<Station[]>([]);
  }

  addNewElement(element:Station):Promise<Station>{
    return new Promise((resolver, reject)=>{
      //doing these steps to avoid api call
      this.dataStore.array.push(element)
      this._child1.next(Object.assign({}, this.dataStore).array)
      resolver(element)
    })
  }

  retrieveArray():Observable<Station[]>{
    return this._child1.asObservable();
  }

  loadAll(){
    this.dataStore.array = [
      {"stationName":"STATION 1", "stationCode":"STN1"},
      {"stationName":"STATION 2", "stationCode":"STN2"},
      {"stationName":"STATION 3", "stationCode":"STN3"},
      {"stationName":"STATION 4", "stationCode":"STN4"},
    ]
    this._child1.next(Object.assign({},this.dataStore).array)
  }
}
