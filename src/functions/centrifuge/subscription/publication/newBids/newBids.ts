import { PublicationContext } from 'centrifuge';
import { OrderbookBids } from '../../../../../interfaces/orderbookBids';

const NewBids = (ctx: PublicationContext): OrderbookBids => {
  const newBids: OrderbookBids = {};
  ctx.data.bids.forEach((bid: [number, number]) => {
    const price: number = bid[0];
    const size: number = bid[1];
    newBids[price] = size;
  });
  return newBids;
};

export default NewBids;
