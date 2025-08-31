import { Component, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hello-app');

  message = signal("");// variable holds message(string) that we will display in our html template (what user actually sees when opening our app)

  constructor(){

    //we initialize variable in constructor
    this.message.set("Hello");

    //additionally we setup a timer (a code we would like to run with some delay). We pass a callback (a function) that is executed after specified period of time.
    
    setTimeout(() => {
      this.message.set("Bye");//in callback we change the greeting message with "bye" message. This message is displayed when the timer fires after 5 seconds
    }, 5000);//period is specifed in miliseconds
  }

}
