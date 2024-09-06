import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-with-standalone-components';

  message: string;// variable holds message(string) that we will display in our html template (what user actually sees when opening our app)

  constructor(){

    //we initialize variable in constructor
    this.message = "Hello";

    //additionally we setup a timer (a code we would like to run with some delay). We pass a callback (a function) that is executed after specified period of time.
    
    setTimeout(() => {
      this.message = "Bye";//in callback we change the greeting message with "bye" message. This message is displayed when the timer fires after 5 seconds
    }, 5000);//period is specifed in miliseconds
  }
}
