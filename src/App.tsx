/**
 * Entry module containing a view and data manipulation
 */
import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios'
import Orderbook from './components/Orderbook';
import Chart from './components/Chart';
import { IBookSide, ICandle } from './core/interfaces';
import { generateRandomCandle } from './core/stub';

const defaultOrderBookState = {
  bids: [],
  asks: []
}

const App = () => {
  const [candles, setCandles] = useState<ICandle[]>([])
  const [orderbook, setOrderbook] = useState(defaultOrderBookState)

  /**
   * Chart update
   */
  useEffect(() => {
    const interval = setInterval(() => {
      const newCandle = generateRandomCandle()
      setCandles(current => current.concat(newCandle))
    }, 500)
    return () => clearInterval(interval);
  }, [])

  /**
   * Orderbook update
   */
  useEffect(() => {
    const interval = setInterval(async () => {
      console.log('Update orderbook is not implemented')
      /**
       * TODO: Uncomment code below to update orderbook once per 2 seconds
       * const { data } = await axios.get('https://api.binance.com/api/v3/depth?symbol=BTCUSDT')
       * data transformation
       * setOrderbook()
       */
    }, 2000)
    return () => clearInterval(interval);
  }, [])

  return (<Grid container style={{ marginTop: '100px' }}>
    <Grid item xs={6}>
      <Chart candles={candles} />
    </Grid>
    <Grid item xs={3}>
      <Orderbook side={IBookSide.ask} items={orderbook.asks} />
    </Grid>
    <Grid item xs={3}>
      <Orderbook side={IBookSide.bid} items={orderbook.bids} />
    </Grid>
  </Grid>)
}

export default App;
