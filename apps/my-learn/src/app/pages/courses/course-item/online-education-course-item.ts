import { Component, Input } from "@angular/core";

@Component({
    selector: "online-education-course-item",
    templateUrl : "./online-education-course-item.html"
})
export class OnlineEducationCourseItemComponent{
@Input() courseData;
}