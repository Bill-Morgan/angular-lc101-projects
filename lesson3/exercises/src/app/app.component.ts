import { Component, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width: number;
  message = 'Space shuttle ready for takeoff!';
  altitude = 0;
  altitudeStr = '0';
  boxWidth: number;
  boxHeight: number;
  takeOffEnabled = true;
  upDisabled = true;
  downDisabled = true;
  leftDisabled = true;
  rightDisabled = true;

  constructor() {
  }

  ngAfterContentInit() {
    const box = document.querySelector('.shuttle-background');
    const style = getComputedStyle(box);
    this.boxWidth = box.clientWidth;
    this.boxHeight = box.clientHeight;
    this.width = this.boxWidth/2 - 37;
  }

  
  position(pix: number): string {
    return pix + 'px';
  }

  liftOff(){
    if (window.confirm('Confirm that the shuttle is ready for takeoff')) {
      this.message = 'Shuttle in flight.';
      this.altitude = 10000;
      this.altitudeStr = '10,000';
      this.height = 10;
      this.color = 'blue';
      this.takeOffEnabled = false;
      this.upDisabled = false;
      this.downDisabled = false;
      this.leftDisabled = false;
      this.rightDisabled = false;
    }
  }

  missionAbort() {
    if (window.confirm('Confirm abort mission.')) {
      this.land();
      this.message = 'Mission Aborted'
    }

  }

  shuttleLand(){
    if (this.color == 'blue') {
      window.alert('The shuttle is landing. Landing gear engaged');
      this.message = 'Space shuttle ready for takeoff!';
      this.land();
      this.message = 'The shuttle has landed';
    }
  }

  land() {
    this.altitude = 0;
    this.altitudeStr = '0';
    this.height = 0;
    this.width = this.boxWidth/2 - 37;
    this.color = 'green';
  }

  move(direction: string){
    this.color = 'blue';
    switch(direction){
      case 'up':
        if ((this.height + 75) < this.boxHeight) {
          this.altitude += 10000;
          this.height += 10;
          this.downDisabled = false;
        } else {
          this.color = 'orange';
          this.upDisabled = true;
        }
        break;
      case 'down':
        if (this.height > 0) {
          this.altitude -= 10000;
          this.height -= 10;
          this.upDisabled = false;
        } else {
          this.color = 'orange';
          this.downDisabled = true;
        }
        break;
      case 'left':
        if (this.width > 0) {
          this.width -= 10;
          this.rightDisabled = false;
        } else {
          this.color = 'orange';
          this.leftDisabled = true;
        }
        break;
      case 'right':
        if ((this.width + 75) < this.boxWidth) {
          this.width += 10;
          this.leftDisabled = false;
        } else {
          this.color = 'orange';
          this.rightDisabled = true;
        }
        break;
      default:
        break;
      }
    this.altitudeStr = this.altitude.toLocaleString();
  }
}
