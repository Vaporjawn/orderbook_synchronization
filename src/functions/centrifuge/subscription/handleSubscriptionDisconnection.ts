import { Subscription } from 'centrifuge';

const HandleSubscriptionDisconnection = (subscription: Subscription) => {
  // Implement logic to handle network connection disruptions, including automatic reconnection and resubscription.
  subscription.on('error', function (ctx) {
    console.error('subscription error', ctx);
    // Automatically reconnect to handle network disruptions
    subscription.subscribe();
  });
};

export default HandleSubscriptionDisconnection;
