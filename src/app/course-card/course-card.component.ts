import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Course} from '../model/course';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

  onCourseViewed(id: number) {
    console.log('card component ' + id + '- button clicked...');

    this.courseSelected.emit(this.course);
  }

  isImageAvailable() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    if (this.course.category === 'BEGINNER') {
      return 'beginner';
    }
  }

  cardStyles() {
    return {
      'text-decoration': 'underline'};
  }
}
