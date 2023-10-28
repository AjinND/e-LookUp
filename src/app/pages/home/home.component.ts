import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DbConnectionService } from 'src/app/services/db-connection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loginFormGroup!: FormGroup;
  signUpFormGroup!: FormGroup;
  signUpUsers: any[] = [];

  constructor(private dbService: DbConnectionService) {}

  async ngOnInit(): Promise<any> {
    this.initForm();
    const userData: any = await this.dbService.getUsers();
    if (userData) {
      console.log('userDATA ', userData);
      this.signUpUsers = userData;
    }
  }

  initForm() {
    this.loginFormGroup = new FormGroup({
      email: new FormControl('', [Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
    this.signUpFormGroup = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSignUp() {
    if (this.signUpFormGroup.valid) {
      this.dbService.insertUser(this.signUpFormGroup.value);
      this.initForm();
    } else {
      console.log('Please enter details');
    }
  }

  onLogin() {
    if (this.loginFormGroup.valid) {
      console.log(this.loginFormGroup.value);
      const userEmail = this.loginFormGroup.value.email;
      const userPassword = this.loginFormGroup.value.password;
      const isUserPresent = this.signUpUsers.find(
        (user) => user.email == userEmail && user.password == userPassword
      );
      if (isUserPresent) {
        alert('User Login Successfull !!');
      } else {
        alert('User Login Failed !!');
      }
      this.initForm();
    } else {
      console.log('Please enter details');
    }
  }
}
