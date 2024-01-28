import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'online-education-course-item',
  templateUrl: './online-education-course-item.component.html',
})
export class OnlineEducationCourseItemComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  @Input() courseData;
  ngOnInit(): void {
    console.log('okay');
  }
}
