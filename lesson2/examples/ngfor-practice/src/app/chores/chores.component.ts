import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   // chores = [ 'Buy groceries', 'Clean bathroom'];
   // // 'Empty dishwasher', 'Complete LaunchCode prep work',
   // todoTitles = ["Yesterday's Chores", "Today's Chores", "Tomorrow's Chores"];

   chores = [
      {title: "Yesterday's Chores", tasks: ['Empty dishwasher', 'Complete LaunchCode prep work']},
      {title: "Today's Chores", tasks: ['Buy groceries', 'Clean bathroom']},
      {title: "Tomorrow's Chores", tasks: ['Buy groceries', 'Clean bathroom']},
   ]
   constructor() { }

   ngOnInit() {
   }

}
