import { Centrifuge, DisconnectedContext } from 'centrifuge';

const HandleCentrifugeDisconnection = (centrifuge: Centrifuge) => {
  // Implement logic to handle network connection disruptions, including automatic reconnection and resubscription.
  centrifuge.on('disconnected', function (ctx: DisconnectedContext) {
    console.warn('disconnected', ctx);
    // Automatically reconnect to handle network disruptions
    centrifuge.connect();
  });
};

export default HandleCentrifugeDisconnection;
