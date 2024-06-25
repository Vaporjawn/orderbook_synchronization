# Orderbook Synchronization
[![Install](https://github.com/Vaporjawn/orderbook_synchronization/actions/workflows/install.js.yml/badge.svg)](https://github.com/Vaporjawn/orderbook_synchronization/actions/workflows/install.js.yml)[![Build](https://github.com/Vaporjawn/orderbook_synchronization/actions/workflows/build.js.yml/badge.svg)](https://github.com/Vaporjawn/orderbook_synchronization/actions/workflows/build.js.yml)[![Tests](https://github.com/Vaporjawn/orderbook_synchronization/actions/workflows/tests.js.yml/badge.svg)](https://github.com/Vaporjawn/orderbook_synchronization/actions/workflows/tests.js.yml)

https://orderbook-synchronization.vercel.app/

<img width="1271" alt="image" src="https://github.com/Vaporjawn/orderbook_synchronization/assets/15694665/992a26b5-cf77-4d9d-8441-b6cde4cbe1b2">


This project is a React application with TypeScript, utilizing Vite for an optimized development experience. It focuses on synchronizing order book data, showcasing real-time bid and ask updates.

## Summary

Create a ReactJS UI component to synchronize and display an orderbook using websocket updates.

## Task Description

Your task is to implement an isolated UI component that represents an orderbook, displaying bids and asks by traders on an exchange. Utilize websocket updates to construct and update the orderbook (bids and asks array) in an optimized manner without causing memory leaks. Implement logic to handle network connection loss and resubscribe automatically, as well as manage lost packages based on incorrect sequence numbers.

## Example Orderbook UI

*An example UI image or description would be here.*

## Getting Started

To get started with this project, clone the repository and install the dependencies:

```sh
npm install
npm start
```

## Resources

- Orderbook synchronization via websockets: [Orderbook Websocket Documentation](https://docs.rabbitx.io/api-documentation/websocket/orderbook)
- Subscribing to websockets: [Websocket Subscription Documentation](https://docs.rabbitx.io/api-documentation/websocket)
- Orderbook response data structure (OrderbookData): [Data Structure Documentation](https://docs.rabbitx.io/api-documentation/data-structure)
- Centrifuge-js SDK for websocket connection: [Centrifuge-js GitHub](https://github.com/centrifugal/centrifuge-js)
- URL for subscribing to public websockets channels:
  - Testnet: `wss://api.testnet.rabbitx.io/ws`
  - Production: `wss://api.prod.rabbitx.io/ws`

## Requirements

- Use ReactJS for building the UI component.
- Integrate the centrifuge-js SDK for websocket connections.

## Technical Specifications

- Develop a ReactJS UI component to represent the orderbook, including bids and asks.
- Establish a websocket connection using the centrifuge-js SDK and subscribe to the orderbook updates.
- Process the incoming websocket data to construct and maintain an optimized bids and asks array, ensuring efficient memory management.
- Merge existing bids and asks with incoming websocket updates, keeping the orderbook up-to-date.
- Implement logic to handle network connection disruptions, including automatic reconnection and resubscription.
- Account for lost packages by verifying the correctness of sequence numbers in the websocket updates.

## Deliverables

- A ReactJS application containing the orderbook UI component.
- Source code with clear and concise comments explaining the implementation.
- A brief document outlining the approach taken, challenges faced, and possible improvements.

## Evaluation Criteria

Your submission will be evaluated based on the following:

- **Functionality**: The UI component should accurately display and update the orderbook using websocket data.
- **Code Quality**: The source code should be clean, well-organized, and properly commented.
- **Optimization**: The application should handle memory efficiently and avoid memory leaks.
- **Robustness**: The solution should account for network disruptions and lost packages.
