import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

const API_BASE_URL = 'http://www.indra-project.tk/public/index.php/api/v1';

@Injectable()
export class StationsProvider {

  constructor(
    public http: HttpClient
  ) { }

  private stationSubject = new BehaviorSubject<any[]>([]);

  getStations() {

    this.http.get<any>(`${API_BASE_URL}/stations`)
      .subscribe(data => {
        this.stationSubject.next(data);
      });

    return this.stationSubject;
  }

  setStationStatus(id, status: 1 | 0) {
    let saveRequest = this.http.post<any>(`${API_BASE_URL}/stations/${id}`, { active: status });

    saveRequest.subscribe(data => {
      this.getStations();
    });

    return saveRequest;
  }

  getSensors(mac_address) {
    return this.http.get<any>(`${API_BASE_URL}/stations/${mac_address}/sensors`);
  }

  setSensorProperties(mac_address, type, properties: any) {
    return this.http.post<any>(`${API_BASE_URL}/stations/${mac_address}/sensors/${type}`, properties);
  }

  getHistory(mac_address, filter: { startDate: string, endDate: string }) {
    return this.http.get<any>(`${API_BASE_URL}/stations/${mac_address}/sensor-data?startDate=${filter.startDate}&endDate=${filter.endDate}`)
      .map(sensors => sensors.filter(sensor => sensor.data && sensor.data.length > 0));
  }
}