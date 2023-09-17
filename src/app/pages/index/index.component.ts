import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.state = this.auth.state();
    this.catagory=this.auth.catagory();

  }
  catagory:any=[];
  state: any = [];
  city:any=[];
 

  onSelect(state:any){
    //console.log(state.target.value);
    this.city=this.auth.city().filter(e=> e.id == state.target.value);
    console.log(this.city);
  }


}
