import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../subscription.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  Fullname;
  Username;
  Email;
  Phone;
  Address;
  Plan;
  Time;

  constructor(private us : SubscriptionService) { }

  ngOnInit() {
  }

  addData() {
    this.us.addData(this.Fullname, this.Username, this.Email, this.Phone, this.Address, this.Plan, this.Time);
    console.log(this.Fullname)
  }

}
