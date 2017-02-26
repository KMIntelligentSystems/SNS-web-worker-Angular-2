import { Component, EventEmitter, Output } from '@angular/core';
import { Directive, ElementRef, Input } from '@angular/core';


import { NotificationService } from './app.notification.service';

  

@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  providers: [NotificationService]
})

export class AppComponent {
  message: string;
  promise: Promise<string>;

  constructor()
  {
     }


  getMessagesClicked(event) 
  {
      alert('waiting for message')
       var p  = new Promise<string> (
      (resolve: (str: string)=>void, reject: (str: string)=>void) =>{
         var notificationService = new NotificationService();
          notificationService.startWork('start').then(function(response) {
         // complete
        }, function(error) {
         // error
        }, function(response) {
         // notify (here you receive intermittent responses from worker)
            var res = JSON.parse(response);
            var msg = JSON.parse(res.msg);
    
            resolve(msg.Message);
         }); 
      }
    );
    this.promise = p.then();
   }
}

    
   
 
