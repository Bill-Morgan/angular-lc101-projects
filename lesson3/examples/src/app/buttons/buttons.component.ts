import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   gInactive: boolean = false;
   cInactive: boolean = false;
   sInactive: boolean = false;

   constructor() { }

   ngOnInit() { }

   buttonChange() {
      this.gInactive = !this.gInactive;
      this.cInactive = !this.cInactive;
      this.sInactive = !this.sInactive;
   }

   buttonActivate() {
      this.gInactive = false;
      this.cInactive = false;
      this.sInactive = false;        
   }

}
