import { Centrifuge } from 'centrifuge';
import { useState } from 'react';
import InitializeCentrifuge from './functions/centrifuge/initializeCentrifuge';
import { OrderbookBids } from './interfaces/orderbookBids';
import AppTitle from './components/appTitle';
import Footer from './components/footer';
import TableHeader from './components/table/tableHeader';
import SubscriptionService from './functions/centrifuge/subscription/subscriptionService';
import GreenGradientBackground from './styles/greenGradientBackground';
import RedGradientBackground from './styles/redGradientBackground';
import './styles/App.css';
import TableData from './components/table/tableData';

const App = () => {
  const [asks, setAsks] = useState<OrderbookBids>({});
  const [bids, setBids] = useState<OrderbookBids>({});
  const [sequence, setSequence] = useState<number>(0);
  const [timestamp, setTimestamp] = useState<number>(0);

  const centrifuge: Centrifuge = InitializeCentrifuge('Prod');
  const marketId: string = 'BTC-USD';
  const channelName: string = 'orderbook:' + marketId;
  SubscriptionService({ centrifuge, channelName, setAsks, setBids, setSequence, setTimestamp });

  return (
    // Develop a ReactJS UI component to represent the orderbook, including bids and asks.
    <>
      <AppTitle marketId={marketId} />
      <div style={{ display: 'flex', gap: '0px' }}>
        <div className='orderbook-container'>
          <table style={{ border: '1px solid black', marginRight: '-3.5%' }}>
            <TableHeader label='Asks' />
            <tbody>
              {Object.keys(asks).map((price: any, index: number) => (
                <tr key={price} style={{ backgroundColor: RedGradientBackground(index) }}>
                  <TableData data={asks[price]} />
                  <TableData data={price} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='orderbook-container'>
          <table style={{ border: '1px solid black', marginLeft: '-3.5%' }}>
            <TableHeader label='Bids' />
            <tbody>
              {Object.keys(bids).map((price: any, index: number) => (
                <tr key={price} style={{ backgroundColor: GreenGradientBackground(index) }}>
                  <TableData data={price} />
                  <TableData data={bids[price]} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer sequence={sequence} timestamp={timestamp} />
    </>
  );
};

export default App;
