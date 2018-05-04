# waiter-node

A simple http endpoint that sleeps for a certain amount of time. Mainly used in webhook testing.

Requirements:

1) Node 8.11.1 ([https://nodejs.org/en/](https://nodejs.org/en/))

2) yarn - npm install -g yarn

To install:
```
yarn install
```
To run:
```
PORT=3005 npm start

curl -X POST http://localhost:3005/wait   # wait 1 second
curl -X POST http://localhost:3005/wait?seconds=5   # wait 5 second
```
