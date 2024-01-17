import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { OnlineEducationOptionComponent } from './pages/home/education-option/education-option.component';
import { OnlineEducationCourseComponent } from './pages/courses/courses/online-education-courses.component';
import { OnlineEducationCourseItemComponent } from './pages/courses/course-item/online-education-course-item';
import { OnlineEducationTeachersComponent } from './pages/teachers/online-education-teachers.component';
import { OnlineEducationTeacherItemComponent } from './pages/teachers/teacher-item/online-education-teacher-item.component';
import { OnlineEducationAboutComponent } from './pages/about/online-education-about.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    OnlineEducationOptionComponent,
    OnlineEducationCourseComponent,
    OnlineEducationCourseItemComponent,
    OnlineEducationTeachersComponent,
    OnlineEducationTeacherItemComponent,
    OnlineEducationAboutComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
