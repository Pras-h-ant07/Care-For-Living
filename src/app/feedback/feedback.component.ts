import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  Fullname;
  Email;
  Address;
  Phone;
  Message;
  Question;
  
  constructor(private us: UsersService) { }

  ngOnInit() {
  }

  addData() {
    this.us.addData(this.Fullname,this.Email,this.Address,this.Phone,this.Message,this.Question);
    // console.log(this.name)
}

}
