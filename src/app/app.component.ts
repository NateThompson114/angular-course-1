import { COURSES } from './../db-data';
import { Component } from '@angular/core';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  startDate = new Date();

  onCourseSelected(course: Course) {
    console.log('App component -click event bubbled...', course);
  }
}
