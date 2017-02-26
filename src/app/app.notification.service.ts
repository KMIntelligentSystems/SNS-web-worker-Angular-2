import { Injectable } from '@angular/core';
//import { Component, EventEmitter, Input, Output } from '@angular/core';

//import {Deferred} from 'q';
import * as Q  from './q';

//import * as sio  from 'socket.io


@Injectable()
export class NotificationService{
  
    worker = undefined;
    startWork(postData: string)
    {
        var defer = Q.defer();
       if (!this.worker) {
                //this.worker.terminate();
                this.worker = new Worker('./worker.js');
        }
         
         this.worker.onmessage = function (e) {
                console.log('Worker said: ', e.data);
               defer.notify(JSON.stringify(e.data));//msg
        };

        if(postData === "start")
        {
             this.worker.postMessage("start"); //start Send data to our worker.
        }
        
        return defer.promise;
         
    }
      stopWork() {
            if (this.worker) {
                this.worker.terminate();
            }
        }
      


}