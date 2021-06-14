import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TryfreeComponent } from './tryfree/tryfree.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MiddleComponent } from './middle/middle.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { FocusComponent } from './focus/focus.component';
import { ImprovementComponent } from './improvement/improvement.component';
import { HappinessComponent } from './happiness/happiness.component';
import { GratitudeComponent } from './gratitude/gratitude.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { OffersComponent } from './offers/offers.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { SleepComponent } from './sleep/sleep.component';
import { StressComponent } from './stress/stress.component';
import { ImpfocusComponent } from './impfocus/impfocus.component';
import { SelfimpComponent } from './selfimp/selfimp.component';
import { HappieComponent } from './happie/happie.component';
import { DevelopComponent } from './develop/develop.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    RegisterComponent,
    LoginComponent,
    ContactusComponent,
    FeedbackComponent,
    TryfreeComponent,
    GalleryComponent,
    MiddleComponent,
    FirstpageComponent,
    FocusComponent,
    ImprovementComponent,
    HappinessComponent,
    GratitudeComponent,
    SubscriptionComponent,
    OffersComponent,
    ThankyouComponent,
    SleepComponent,
    StressComponent,
    ImpfocusComponent,
    SelfimpComponent,
    HappieComponent,
    DevelopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
