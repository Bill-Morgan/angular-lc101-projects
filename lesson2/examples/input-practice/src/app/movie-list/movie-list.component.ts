import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];
   errMsg: string;
   deleteMessage = false;

   constructor() { }

   ngOnInit() { }

   addMovie(title: string) {
      if (title.length > 0) {
         if ((this.movies.map(each => {return each.toLowerCase()})).includes(title.toLowerCase())) {
            console.log(title);
            this.errMsg = 'That movie is already in the list.'
         } else {
            this.movies.push(title);
            this.errMsg = '';
         }
      } else {
         this.errMsg = 'Please enter a title.'
      }
   }

   deleteMovie(title: string) {
      this.movies.splice(this.movies.indexOf(title), 1);
   }

   mouseEnter() {
      console.log('enter')
      this.deleteMessage = true;
   }

   mouseExit() {
      console.log('exit')
      this.deleteMessage = false;
   }
}