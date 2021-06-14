import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  Fullname;
  Email;
  Address;
  Phone;
  Message;
  Question;

  constructor(private us: UsersService) { }

  ngOnInit()  {
  }

  addData() {
    this.us.addData(this.Fullname,this.Email,this.Address,this.Phone,this.Message,this.Question);
    // console.log(this.name)
}

}
