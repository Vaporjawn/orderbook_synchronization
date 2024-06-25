import { OrderbookBids } from '../../../../../../interfaces/orderbookBids';
import SortBids from '../sortBids';

describe('SortBids', () => {
  it('should sort bids in ascending order', () => {
    const mergedBids: OrderbookBids = {
      100: 1,
      99: 1,
      98: 1,
    };

    const sortedBids: OrderbookBids = SortBids(mergedBids);

    expect(sortedBids).toEqual({
      98: 1,
      99: 1,
      100: 1,
    });
  });
});
