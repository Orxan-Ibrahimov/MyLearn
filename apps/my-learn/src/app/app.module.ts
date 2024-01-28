import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { OnlineEducationOptionComponent } from './pages/home/education-option/education-option.component';
import { OnlineEducationTeachersComponent } from './pages/teachers/online-education-teachers.component';
import { OnlineEducationTeacherItemComponent } from './pages/teachers/teacher-item/online-education-teacher-item.component';
import { OnlineEducationAboutComponent } from './pages/about/online-education-about.component';
import { OnlineEducationStudentReviewsComponent } from './pages/about/student-reviews/online-education-student-reviews.component';
import { OnlineEducationContactComponent } from './pages/contact/online-education-contact.component';
import { OnlineEducationContactAddressComponent } from './pages/contact/address/online-education-contact-address.component';
import { Route, RouterModule } from '@angular/router';
import { OnlineEducationHomeComponent } from './pages/home/online-education-home.component';
import { OnlineEducationLoginComponent } from './pages/registration/login/online-education-login.component';
import { OnlineEducationRegisterComponent } from './pages/registration/register/online-education-register.component';
import { OnlineEducationCoursesComponent } from './pages/courses/online-education-courses.component';
import { OnlineEducationCourseItemComponent } from './pages/courses/course-item/online-education-course-item.component';
import { OnlineEducationProfileComponent } from './pages/registration/profile/online-education-profile.component';

const Routes: Route[] = [
  { path: '', component: OnlineEducationHomeComponent },
  { path: 'about', component: OnlineEducationAboutComponent },
  { path: 'courses', component: OnlineEducationCoursesComponent },
  { path: 'teachers', component: OnlineEducationTeachersComponent },
  { path: 'contact', component: OnlineEducationContactComponent },
  { path: 'login', component: OnlineEducationLoginComponent },
  { path: 'register', component: OnlineEducationRegisterComponent },
  { path: 'profile', component: OnlineEducationProfileComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    OnlineEducationHomeComponent,
    OnlineEducationOptionComponent,
    OnlineEducationTeachersComponent,
    OnlineEducationTeacherItemComponent,
    OnlineEducationAboutComponent,
    OnlineEducationStudentReviewsComponent,
    OnlineEducationContactComponent,
    OnlineEducationContactAddressComponent,
    OnlineEducationLoginComponent,
    OnlineEducationRegisterComponent,
    OnlineEducationCoursesComponent,
    OnlineEducationCourseItemComponent,
    OnlineEducationProfileComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(Routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
