import { OrderbookBids } from '../../../../../interfaces/orderbookBids';

const SortBids = (mergedBids: OrderbookBids): OrderbookBids => {
  return Object.keys(mergedBids)
    .sort((a, b) => Number(a) - Number(b))
    .reduce((obj, key: any) => {
      obj[key] = mergedBids[key];
      return obj;
    }, {} as OrderbookBids);
};

export default SortBids;
