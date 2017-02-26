import { Component, EventEmitter, Output } from '@angular/core';
import { Directive, ElementRef, Input } from '@angular/core';


import { NotificationService } from './app.notification.service';
import {NotificationController} from './app.notification.controller';

let p: Promise<string> = new Promise (
   (resolve: (str: string)=>void, reject: (str: string)=>void) =>{
       
       
       var notificationService = new NotificationService();
          notificationService.startWork('start').then(function(response) {
    // complete
        }, function(error) {
    // error
        }, function(response) {
    // notify (here you receive intermittent responses from worker)
        var res = JSON.parse(response);
        var msg = JSON.parse(res.msg)
    
        resolve(msg.Message);
        function test() : string{return "tet"}
        return test;
      }); 
     }
 );

  

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
      
   /*this.promise = p.then();
    p.then((st) => {
        this.message = st;
    });*/
  }


  getMessagesClicked(event) 
  {
      alert('waiting for message')
    var pp  = new Promise<string> (
   (resolve: (str: string)=>void, reject: (str: string)=>void) =>{
       
       
       var notificationService = new NotificationService();
          notificationService.startWork('start').then(function(response) {
    // complete
        }, function(error) {
    // error
        }, function(response) {
    // notify (here you receive intermittent responses from worker)
        var res = JSON.parse(response);
        var msg = JSON.parse(res.msg)
    
        resolve(msg.Message);
    
      }); 
    }
   );
 this.promise = pp.then();
}
}

    
   
 /*  notificationService: NotificationService = new NotificationService();
  public getMessages(): void {
      
  this.notificationService.startWork('start').then(function(response) {
    // complete
        }, function(error) {
    // error
        }, function(response) {
    // notify (here you receive intermittent responses from worker)
        var res = JSON.parse(response);
        var msg = JSON.parse(res.msg)
       // console.log(msg.Message)
       // console.log(msg)
        //test.appComponent.message = msg.Message;
        
        var promise = new Promise<string>(function(resolve, reject) {
                resolve(msg.Message)
        });

        //emitter.emit(msg.Message);
      }); 
      

//return aMessage;
   } 

public myCallback: {(msg: string): string;};*/
 


