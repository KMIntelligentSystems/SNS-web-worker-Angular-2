# SNS-web-worker-Angular-2
An Angular 2 Promise using a web worker to listen for SNS notifications over socket io
This snippet comprises:
- Node js server running on a Linux ec2 instance provides an HTTP enpoint for message notifications from AWS SNS Service
- The server has an open socket io channel through which to pass the SNS to the client
- The client is an Angular 2 typescript implementation structured in VS Code
- A web worker runs on a separate thread polling for notifications over the socket io channel to the server
- An Angular Service implements a Q type promise which notifies the main app.component.ts of the message
- App.component.ts implements an ES6 promise which resolves to the message when it is received
- A button in app.component.html is loaded into Index.html
- On button press the ES6 Promise is launched waiting for the message
- When a SNS message is sent and received at some future time the promise is resolved and the message displayed using {{promise | async}}
