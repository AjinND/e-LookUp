import { Injectable } from '@angular/core';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  state() {
    return [
      {
        id: 1,
        name: 'Maharashtra',
      },
      {
        id: 2,
        name: 'Gujrat',
      },
    ];
  }
  city() {
    return [
      {
        id: 1,
        name: 'Mumbai',
      },
      {
        id: 1,
        name: 'Pune',
      },
      {
        id: 1,
        name: 'Wardha',
      },
      {
        id: 2,
        name: 'Ahemedabad',
      },
      {
        id: 2,
        name: 'Surat',
      },
    ];
  }

  catagory() {
    return[
      {
        id: 1,
        name: 'Plumber',
      },
      {
        id: 2,
        name: 'Carpenter',
      },
      {
        id: 3,
        name: 'Electrition',
      },
      {
        id: 4,
        name: 'Wifi Services',
      },
    ];
  }
}
