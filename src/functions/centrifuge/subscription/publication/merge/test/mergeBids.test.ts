import { OrderbookBids } from '../../../../../../interfaces/orderbookBids';
import MergeBids from '../mergeBids';

describe('MergeBids', () => {
  it('should return an object with the price as the key and the size as the value', () => {
    const prevBids: OrderbookBids = { 1: 2, 3: 4 };
    const newBids: OrderbookBids = { 5: 6, 7: 8 };
    const result: OrderbookBids = MergeBids(prevBids, newBids);
    expect(result).toEqual({ 1: 2, 3: 4, 5: 6, 7: 8 });
  });

  it('should return an object with the price as the key and the size as the value', () => {
    const prevBids: OrderbookBids = { 1: 2, 3: 4 };
    const newBids: OrderbookBids = { 3: 0, 5: 6, 7: 8 };
    const result: OrderbookBids = MergeBids(prevBids, newBids);
    expect(result).toEqual({ 1: 2, 5: 6, 7: 8 });
  });

  it('should return an object with the price as the key and the size as the value', () => {
    const prevBids: OrderbookBids = { 1: 2, 3: 4 };
    const newBids: OrderbookBids = { 3: 0, 5: 6, 7: 0 };
    const result: OrderbookBids = MergeBids(prevBids, newBids);
    expect(result).toEqual({ 1: 2, 5: 6 });
  });
});
