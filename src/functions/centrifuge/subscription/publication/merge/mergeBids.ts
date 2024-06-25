import { OrderbookBids } from '../../../../../interfaces/orderbookBids';
import SortBids from '../sort/sortBids';

const MergeBids = (prevBids: OrderbookBids, newBids: OrderbookBids): OrderbookBids => {
  // Merge existing bids and asks with incoming websocket updates, keeping the orderbook up-to-date.
  const mergedBids: OrderbookBids = { ...prevBids, ...newBids };
  for (const price in mergedBids) {
    if (mergedBids[price] == 0) {
      delete mergedBids[price];
    }
  }

  return SortBids(mergedBids);
};

export default MergeBids;
