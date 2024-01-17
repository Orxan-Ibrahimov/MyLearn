import { Component } from "@angular/core";

@Component({
selector : "online-education-course",
templateUrl: "./online-education-courses.component.html"
})
export class OnlineEducationCourseComponent{
    courses:any[] = [
        {name : "HTML", avatarImageUrl:"../../../assets/images/avatar-g.jpg", imageUrl:"../../../assets/images/course-html.jpeg", playlistItemCount: 10},
        {name : "CSS", avatarImageUrl:"../../../assets/images/avatar-g2.jpg", imageUrl:"../../../assets/images/course-css.jpg", playlistItemCount: 15},
        {name : "Sass", avatarImageUrl:"../../../assets/images/avatar-m.jpg", imageUrl:"../../../assets/images/course-sass.jpg", playlistItemCount: 14},
        {name : "JavaScript", avatarImageUrl:"../../../assets/images/avatar-m2.jpg", imageUrl:"../../../assets/images/course-js.png", playlistItemCount: 9},
        {name : "HTML", avatarImageUrl:"../../../assets/images/avatar-g.jpg", imageUrl:"../../../assets/images/course-html.jpeg", playlistItemCount: 26},
        {name : "Sass", avatarImageUrl:"../../../assets/images/avatar-g2.jpg", imageUrl:"../../../assets/images/course-sass.jpg", playlistItemCount: 7},
    ]
}