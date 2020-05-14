import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 240;
  message = 'Space shuttle ready for takeoff!';
  altitude = 0;

  constructor() {}

  position(pix: number): string {
    return pix + 'px';
  }

  confirmLiftOff(){
    if (window.confirm('Confirm that the shuttle is ready for takeoff')) {
      this.message = 'Shuttle in flight.';
      this.altitude = 10000;
      this.height = 10;
      this.color = 'blue';
    }
  }

  shuttleLand(){
    if (this.color == 'blue') {
      window.alert('The shuttle is landing. Landing gear engaged');
      this.message = 'The shuttle has landed';
      this.altitude = 0;
      this.height = 0;
      this.width = 240;
      this.color = 'green';
    }
  }
  
  move(direction: string){
    switch(direction){
      case 'up':
        this.altitude += 10000;
        this.height += 10;
        break;
      case 'down':
        this.altitude -= 10000;
        this.height -= 10;
        break;
      case 'left':
        this.width -= 10;
        break;
      case 'right':
        this.width += 10;
        break;
      }


  }
}
