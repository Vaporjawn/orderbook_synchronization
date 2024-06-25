import { PublicationContext } from 'centrifuge';
import NewBids from '../newBids';

describe('newBids', () => {
  it('should return an object with the price as the key and the size as the value', () => {
    const ctx: PublicationContext = {
      data: {
        bids: [
          [1, 2],
          [3, 4],
        ],
      },
      channel: 'channel',
    };
    const result = NewBids(ctx);
    expect(result).toEqual({ 1: 2, 3: 4 });
  });
  it('should return an empty object if there are no bids', () => {
    const ctx: PublicationContext = {
      data: {
        bids: [],
      },
      channel: 'channel',
    };
    const result = NewBids(ctx);
    expect(result).toEqual({});
  });
});
