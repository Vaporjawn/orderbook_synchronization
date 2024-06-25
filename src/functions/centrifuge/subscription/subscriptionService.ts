import { Centrifuge, Subscription, PublicationContext } from 'centrifuge';
import { OrderbookBids } from '../../../interfaces/orderbookBids';
import { UseStateNumber } from '../../../types/useStateNumber';
import { UseStateOrderbookBids } from '../../../types/useStateOrderbookBids';
import HandleSubscriptionDisconnection from './handleSubscriptionDisconnection';
import MergeBids from './publication/merge/mergeBids';
import NewBids from './publication/newBids/newBids';

const SubscriptionService = (args: {
  centrifuge: Centrifuge;
  channelName: string;
  setAsks: UseStateOrderbookBids;
  setBids: UseStateOrderbookBids;
  setSequence: UseStateNumber;
  setTimestamp: UseStateNumber;
}): void => {
  const { centrifuge, channelName, setAsks, setBids, setSequence, setTimestamp } = args;
  const subscription: Subscription = centrifuge.newSubscription(channelName);
  subscription.subscribe();
  // Process the incoming websocket data to construct and maintain an optimized bids and asks array, ensuring efficient memory management

  subscription.on('publication', function (ctx: PublicationContext) {
    setSequence((prevSequence: number) => {
      // Account for lost packages by verifying the correctness of sequence numbers in the websocket updates.
      if (ctx.data.sequence !== prevSequence + 1) {
        console.warn('Lost Packets!');
      }
      return ctx.data.sequence;
    });
    setTimestamp(ctx.data.timestamp);

    setAsks((prevAsks: OrderbookBids) => {
      const newAsks: OrderbookBids = NewBids(ctx);
      return MergeBids(prevAsks, newAsks);
    });
    setBids((prevBids: OrderbookBids) => {
      const newBids: OrderbookBids = NewBids(ctx);
      return MergeBids(prevBids, newBids);
    });
  });
  HandleSubscriptionDisconnection(subscription);
};

export default SubscriptionService;
