import { Centrifuge, ConnectedContext, ConnectingContext } from 'centrifuge';
import ProdJWToken from '../../tokens/production/prodJWToken';
import ProdURL from '../../tokens/production/prodURL';
import TestNetJWToken from '../../tokens/test/testNetJWToken';
import TestNetURL from '../../tokens/test/testNetURL';
import { URLType } from '../../types/urlType';
import HandleCentrifugeDisconnection from './handleCentrifugeDisconnection';

const InitializeCentrifuge = (urlType: URLType) => {
  // Establish a websocket connection using the centrifuge-js SDK and subscribe to the orderbook updates.
  const URL: string = urlType === 'Prod' ? ProdURL : TestNetURL;
  const JWToken: string = urlType === 'Prod' ? ProdJWToken : TestNetJWToken;
  const centrifuge = new Centrifuge(URL, {
    token: JWToken,
  });

  centrifuge.connect();

  centrifuge.on('connected', function (ctx: ConnectedContext) {
    console.log('connected', ctx);
  });

  centrifuge.on('connecting', function (ctx: ConnectingContext) {
    console.log('connecting', ctx);
  });

  HandleCentrifugeDisconnection(centrifuge);

  return centrifuge;
};

export default InitializeCentrifuge;
