import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DbConnectionService {
  apiUrl = 'http://localhost:4201/';
  constructor(private http: HttpClient) {}

  async getUsers() {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl + 'getUsers').subscribe(
        (data) => {
          console.log(data);
          resolve(data);
        },
        (error) => {
          console.log(error);
          reject(error);
        }
      );
    });
  }

  async insertUser(value: any) {
    console.log('value ', value);
    this.http.post(this.apiUrl + 'saveUser', value).subscribe((res) => {
      if (res) {
        alert('Data Inserted Successfully!');
      } else {
        alert('Data Insertion Failed!');
      }
      console.log(res);
    });
  }
}
